import WebpackChain from "webpack-chain";

class  Core {
  webpackChainFns: any[];
  webpackChain: any;
  constructor (context, {plugins, pkg, inlineOptions, useBuiltIn}) {
    this.webpackChainFns = [];
    this.webpackChain = new WebpackChain();
  }
}

export default Core;