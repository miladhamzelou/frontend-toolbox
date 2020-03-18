import * as React from 'react';
import PropTypes from 'prop-types';

const CoinsIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-testid="CoinsIcon"
    width="16"
    height="14.4"
    viewBox="0 0 16 14.4"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <path
      d="M16 7.8c-.026-.456-.569-.813-1.654-1.085a.6.6 0 0 0 .057-.25V4.6C14.3 3.046 7.931 3 7.2 3S.1 3.046 0 4.6V6.466c0 .507.655.9 1.628 1.2A.585.585 0 0 0 1.6 7.8v1.863c-1.048.27-1.571.621-1.6 1.07V12.6c0 .353.319.652.839.9a.587.587 0 0 0-.035.166v1.866c0 .887 2 1.438 4.218 1.695a.245.245 0 0 0 .049.01h.014c.428.048.862.086 1.293.113a.22.22 0 0 0 .026.005h.014c.546.033 1.083.05 1.586.05s1.04-.017 1.586-.05h.014c.005 0 .017 0 .026-.005.43-.027.865-.064 1.293-.113h.014a.245.245 0 0 0 .049-.01c2.219-.257 4.216-.808 4.218-1.7v-1.86c-.019-.327-.3-.6-.848-.828a.6.6 0 0 0 .052-.24v-1.743c.957-.294 1.6-.688 1.6-1.19V7.8zm-2.159 4.886l-.091.08a2.386 2.386 0 0 1-.68.368v-1.272a3.969 3.969 0 0 0 .8-.367v1.1a.17.17 0 0 1-.032.091zm-5.967 1.239H7.468V12.6h.262q.4-.008.8-.026V13.9l-.172.008a24.1 24.1 0 0 1-.484.017zm-1.165 0l-.365-.009h-.045q-.218-.007-.433-.018v-1.329q.4.019.8.026h.262v1.333h-.15zm-4.817-.608l-.026-.007v-1.285c.249.067.517.129.8.184v1.3q-.367-.078-.676-.163zm5.621 2.208h.22v1.333q-.553-.005-1.067-.031V15.5q.4.019.8.026zm1.016 0q.4-.008.8-.026v1.331q-.514.025-1.067.031v-1.329h.22zm2.138-.121v1.324q-.384.04-.8.07v-1.33c.27-.014.533-.035.8-.06zm.533-.058q.412-.05.8-.113v1.309q-.377.066-.8.122zm1.333-.208c.283-.056.551-.117.8-.184v1.288c-.238.069-.505.135-.8.2zm-9.067 0v1.3a10.48 10.48 0 0 1-.8-.2v-1.28c.25.067.517.129.801.184zm.533.1q.387.063.8.113v1.319q-.423-.056-.8-.122zm1.333.17c.262.025.53.047.8.065V16.8q-.416-.029-.8-.07zm-.662-1.595l-.079-.013h-.058v-1.326c.262.025.53.047.8.065v1.329a25.972 25.972 0 0 1-.661-.055zM4 12.417v1.319q-.423-.056-.8-.122V12.3q.387.067.8.117zm5.244 1.439l-.178.013v-1.33c.27-.018.538-.039.8-.065V13.8a23.01 23.01 0 0 1-.506.048zm1.156-.12v-1.319q.412-.05.8-.113v1.309q-.377.067-.8.122zm1.333-1.527c.283-.056.551-.117.8-.184v1.288c-.238.069-.505.135-.8.2zm-3.646-1.218c-.2-.005-.4-.013-.589-.022h-.031V9.636q.4.019.8.026h.262V11h-.387zM1.867 7.18V5.891c.249.067.517.129.8.184v1.3l-.1-.021a8.626 8.626 0 0 1-.413-.1 4.444 4.444 0 0 1-.287-.074zm4.847-.718h.22V7.8c-.359 0-.716-.013-1.067-.03V6.436q.4.019.8.026zm1.016 0q.4-.008.8-.026v1.33l-.13.008h-.013a23.71 23.71 0 0 1-.546.018h-.374V6.465h.22zm6.077.134H13.8l-.1.075a2.594 2.594 0 0 1-.633.329V5.728a3.968 3.968 0 0 0 .8-.367v1.1a.209.209 0 0 1-.061.139zM10.4 7.6V6.283q.412-.05.8-.113v1.308c-.253.045-.519.086-.8.122zm1.333-.225v-1.3c.283-.056.551-.117.8-.184v1.286c-.239.069-.508.136-.8.198zM9.867 6.341v1.322q-.386.041-.8.071V6.406c.27-.018.533-.04.8-.065zM4.533 7.664V6.341c.262.025.53.047.8.065v1.327a24.34 24.34 0 0 1-.8-.069zM4 6.283V7.6l-.16-.02-.1-.015q-.231-.033-.453-.071L3.2 7.48V6.171q.387.062.8.112zm2.867 4.647l-.108-.008q-.256-.02-.5-.044l-.1-.011h-.021V9.541c.262.025.53.047.8.065v1.329zm-1.762-.2C5 10.714 4.9 10.7 4.8 10.679V9.371q.387.063.8.113V10.8a22.702 22.702 0 0 1-.476-.068zm-.838-1.455v1.3q-.442-.095-.8-.2V9.091c.249.067.516.129.8.184zm-1.334-.347V10.2a1.664 1.664 0 0 1-.778-.474l-.018-.03a.168.168 0 0 1 0-.025v-1.1a3.968 3.968 0 0 0 .796.357zm6.4.733q.4-.008.8-.026v1.33c-.35.017-.707.027-1.067.031V9.665h.22zm3.446 1.023c-.117.02-.235.04-.357.059l-.212.031-.21.026V9.483q.412-.05.8-.113v1.31zm-1.806.228l-.3.021V9.606c.27-.018.538-.039.8-.065v1.323c-.155.016-.31.033-.469.046zm3.047-.5c-.133.037-.273.072-.417.106l-.2.046-.063.013v-1.3c.283-.056.551-.117.8-.184v1.287zm1.447-2.595c-.025.181-.435.422-1.167.648a17.9 17.9 0 0 1-4.291.641l-.289.011-.241.007c-.221 0-.445.008-.676.008s-.455 0-.676-.009l-.241-.007-.289-.011a17.9 17.9 0 0 1-4.297-.64C2.577 8.241 2.167 8 2.137 7.822a.063.063 0 0 1 0-.016l.057.013a18.007 18.007 0 0 0 2.063.351h.007c.426.049.868.087 1.322.114h.015q.49.029.993.041c.205.005.406.008.6.008h.428a20.42 20.42 0 0 0 4.983-.617l.169-.05.1-.031c.1-.031.189-.063.278-.1l.046-.018c.075-.029.148-.058.217-.088l.06-.026c.074-.033.145-.067.211-.1l.084-.048.094-.056c.03-.019.037-.021.053-.031 1.202.256 1.516.539 1.547.649zM7.2 3.533c4.4 0 6.621.692 6.663 1.09-.032.18-.442.418-1.166.642a17.9 17.9 0 0 1-4.291.641l-.289.011-.241.007c-.221.005-.445.009-.676.009s-.455 0-.676-.009l-.241-.007-.289-.011A17.9 17.9 0 0 1 1.7 5.265C.979 5.041.57 4.8.537 4.623.579 4.226 2.8 3.533 7.2 3.533zM.533 6.466v-1.1a3.968 3.968 0 0 0 .8.367v1.272c-.518-.194-.799-.389-.8-.539zm1.292 3.69l.014.012a4.536 4.536 0 0 0 2.062.874l.066.015.21.045a20.566 20.566 0 0 0 3.02.383q.542.032 1.107.042c.167 0 .331.006.492.006.184 0 .373 0 .565-.007.349-.007.693-.022 1.031-.041h.01a20.625 20.625 0 0 0 3.078-.394 4.831 4.831 0 0 1-.789.308 18.4 18.4 0 0 1-4.608.653l-.18.006h-.2c-.168 0-.337.005-.51.005-.231 0-.455 0-.676-.009l-.241-.007-.289-.011A17.9 17.9 0 0 1 1.7 11.4c-.73-.228-1.14-.469-1.164-.65.03-.1.299-.35 1.289-.594zM.533 12.6v-1.1a3.968 3.968 0 0 0 .8.367v1.272l-.152-.059c-.422-.18-.647-.347-.648-.48zm.8 2.933v-1.1a3.968 3.968 0 0 0 .8.367v1.277c-.518-.2-.799-.395-.8-.545zm12.533.539V14.8a3.968 3.968 0 0 0 .8-.367v1.1c0 .149-.281.344-.799.539zm.8-2.385c-.029.181-.439.42-1.167.645a17.9 17.9 0 0 1-4.291.641l-.289.011-.241.007C8.455 15 8.231 15 8 15s-.455 0-.676-.009l-.239-.007-.291-.011a17.9 17.9 0 0 1-4.294-.641c-.705-.218-1.113-.449-1.164-.628.079.028.162.055.246.081l.026.008q.108.033.221.064l.086.024.13.034a19.454 19.454 0 0 0 3.549.5c.413.025.835.04 1.262.045h.787a26.75 26.75 0 0 0 1.149-.043H8.8c.457-.027.9-.067 1.325-.115h.017c.474-.055.923-.122 1.339-.2l.254-.049.056-.011a7.165 7.165 0 0 0 1.937-.63l.074-.042.085-.054.079-.049c.534.185.68.353.697.42zm0-3.482V8.929a3.968 3.968 0 0 0 .8-.367v1.1c0 .153-.281.348-.799.543z"
      transform="translate(0 -3)"
    />
  </svg>
);

CoinsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

CoinsIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default CoinsIcon;
