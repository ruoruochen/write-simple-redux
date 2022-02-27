import React from "react";
import Context from "../redux-core/Context.ts";
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class MyConnect extends React.Component {
      componentDidMount() {
        console.log("context", this.context);
        // 从context获取store并订阅更新
        this.context.subscribe(this.handleStoreChange.bind(this));
      }

      handleStoreChange() {
        // 更新UI视图，仅简化
        this.forceUpdate();
      }

      render() {
        return (
          <WrapperComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    }

    MyConnect.contextType = Context;
    return MyConnect;
  };
}
