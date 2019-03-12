import WebpackChain from "webpack-chain";

class  Core {
  webpackChainFns: any[];
  webpackChain: any;
  constructor (context, options) {
    const { plugins, pkg, inlineOptions, useBuiltIn } = options;
    this.webpackChainFns = [];
    this.webpackChain = new WebpackChain();
  }
}

export default Core;
