const fse = require('fs-extra');
const glob = require('glob');
const parser = require('node-html-parser');

// Glob index.svg files inb packages
const svgs = glob.sync(`${process.cwd()}/packages/**/index.svg`);

svgs.forEach(async icon => {
  try {
    const fullPath = icon.substr(0, icon.lastIndexOf('/')).replace('/sprite', '');
    const folderName = fullPath.split('/').pop();
    const svgFileContent = await fse.readFile(icon, 'utf-8');

    /**
     * Check directory existence
     */
    await fse.ensureDirSync(`${fullPath}/component`);
    await fse.ensureDirSync(`${fullPath}/sprite`);

    /**
     * Parse svg to update id and use veiwBox
     * @type {(TextNode & {valid: boolean}) | (HTMLElement & {valid: boolean})}
     */
    const root = parser.parse(svgFileContent);
    const svgElement = root.querySelector('svg');
    const viewBox = svgElement.getAttribute('viewBox');
    svgElement.setAttribute('id', folderName);
    svgElement.removeAttribute('fill');

    /**
     * Make sprite svg
     */
    const splittableFileContent = `/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./${folderName}.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = \`/\${process.env.PUBLIC_URL}/sprite.svg\`;
}

const ${folderName} = ({ className, size }) => 
  <svg 
    data-testid="${folderName}"
    viewBox="0 0 ${viewBox.split(' ').slice(2).join(' ')}"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={\`\${importPrefix}#${folderName}\`} />
  </svg>;

${folderName}.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

${folderName}.defaultProps = {
  size: 1.5,
};

export default ${folderName};

`;

    /**
     * Make svg component
     */
    const normalFileContent = `/**
* THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

const ${folderName} = ({ className, size }) => 
  <svg 
    data-testid="${folderName}"
    viewBox="${viewBox}"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor">
    ${svgElement.innerHTML
    .replace(/xmlns:xlink/g, 'xmlnsXlink')
    .replace(/xlink:href/g, 'xlinkHref')
    .replace(/<g><\/g>/g, '')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/clip-path/g, 'clipPath')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/class=/g, 'className=')}
  </svg>;

${folderName}.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

${folderName}.defaultProps = {
  size: 1.5,
};

export default ${folderName};

`;

    /**
     * Update svg file
     */
    await fse.writeFile(
      `${fullPath}/sprite/${folderName}.svg`,
      root
        .toString()
        .replace(/<g><\/g>/g, '')
        .replace(/xmlns xlink/g, 'xmlns:xlink'),
      'utf8',
    );

    /**
     * Update index js file
     */
    await fse.writeFile(`${fullPath}/component/index.js`, normalFileContent, 'utf8');

    /**
     * Update sprite js file
     */
    await fse.writeFile(`${fullPath}/sprite/index.js`, splittableFileContent, 'utf8');

  } catch (e) {
    console.log(e);
  }
});