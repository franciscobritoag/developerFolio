import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const { animationData, style } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
            style={style} // Pass the style prop to the Lottie component
          />
        </div>
      </Suspense>
    );
  }
}
