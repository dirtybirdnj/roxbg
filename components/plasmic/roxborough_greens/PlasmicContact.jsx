// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: js7xbhyMDXu3U4xUyjvjor
// Component: XuEpLOHyyy
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: -Ea7nJbv4LT/component
import Footer from "../../Footer"; // plasmic-import: X4oZepRJzT2/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_roxborough_greens.module.css"; // plasmic-import: js7xbhyMDXu3U4xUyjvjor/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: XuEpLOHyyy/css

export const PlasmicContact__VariantProps = new Array();

export const PlasmicContact__ArgProps = new Array();

function PlasmicContact__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__opJjq)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u7Rd8
              )}
            >
              {"Contact"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cT0Vj
              )}
            >
              {"Get in touch with us at your earliest convienience"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__bDp)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__q2J02
                )}
              >
                {
                  'Create share standards-compliant ecologies life-hacks applications functionalities embrace, "reinvent efficient utilize podcasts technologies, visualize," killer social sexy beta-test open-source channels platforms scale. Cross-platform e-enable convergence A-list e-enable user-centred data-driven rich-clientAPIs holistic eyeballs schemas B2B world-class methodologies; A-list orchestrate ROI. Metrics, "value-added, networkeffects eyeballs unleash scale, deploy leverage," platforms enable communities visualize, revolutionary. Enable channels turn-key extensible interactive world-class visualize visualize revolutionary, interfaces rss-capable; orchestrate blogospheres. Mission-critical reinvent integrate, e-commerce value-added killer incentivize robust deploy frictionless, "niches enable," turn-key enterprise A-list expedite experiences bricks-and-clicks embedded reintermediate share. Synergize deliverables e-business sexy Cluetrain syndicate innovate. Technologies weblogs embrace monetize share share, beta-test cross-media strategize peer-to-peer post transform transform.\n\nReal-time bricks-and-clicks web services engage, integrate harness next-generation mission-critical platforms experiences synergize, blogging scale, "channels innovative." Enable global, vertical integrate end-to-end bandwidth folksonomies, mesh frictionless. Portals robust content applications utilize reinvent share schemas. Incentivize wireless viral unleash frictionless platforms paradigms, enable channels viral value; enable scalable enterprise: integrateAJAX-enabled data-driven semantic experiences seize proactive world-class enterprise, engage transform integrateAJAX-enabled. Integrated, share exploit streamline e-commerce reinvent dot-com leverage customized deliverables turn-key B2C, whiteboard applications data-driven optimize vertical infomediaries; interfaces?'
                }
              </div>
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "footer"],
  header: ["header"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicContact__ArgProps,
      internalVariantPropNames: PlasmicContact__VariantProps
    });

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
