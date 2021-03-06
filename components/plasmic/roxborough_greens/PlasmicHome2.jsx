// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: js7xbhyMDXu3U4xUyjvjor
// Component: pvpicHeKikM
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: -Ea7nJbv4LT/component
import Section from "../../Section"; // plasmic-import: tpSziDxebW_u/component
import Button from "../../Button"; // plasmic-import: c29AL5vCZlog/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: i3ROZ-xmrQe/component
import Testimonial from "../../Testimonial"; // plasmic-import: BtGrupevbnBt/component
import HomeCta from "../../HomeCta"; // plasmic-import: lofnJGIDRQ7/component
import Footer from "../../Footer"; // plasmic-import: X4oZepRJzT2/component
import { useScreenVariants as useScreenVariantscs1189Nl9NXb } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CS1189Nl9nXB/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_roxborough_greens.module.css"; // plasmic-import: js7xbhyMDXu3U4xUyjvjor/projectcss
import sty from "./PlasmicHome2.module.css"; // plasmic-import: pvpicHeKikM/css
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: TQFP_ilZ5Pvd/icon
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: oGwXFUsb7-cP/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: od24fmHU26Zb/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: tcgGnutb-adQ/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: b-9lCkq3kulA/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: Plu3gFX59akc/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: akEcJ0Sizz7a/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: RFtqQUgrQNcK/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: ywBojQeHzt8E/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: 4wLqS75hbryM/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: tcVtvsGDiVdA/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: DRjSnvIw-76R/icon

export const PlasmicHome2__VariantProps = new Array();

export const PlasmicHome2__ArgProps = new Array();

function PlasmicHome2__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscs1189Nl9NXb()
  });

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

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___7Vd8H)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__l66JR)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___6K2Cz)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4NjuQ
                    )}
                  >
                    {"Make your website"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eH6Z7
                    )}
                  >
                    {"wonderful"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hpaGn
                  )}
                >
                  {
                    "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__l4N9)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__pRg1X)}
                  color={"blue"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__cUAu4)}
                      role={"img"}
                    />
                  }
                  showEndIcon={true}
                >
                  {"Start free trial"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button___855Y)}
                >
                  {"Learn more"}
                </Button>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__tOaIc)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___3X4JX)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/roxborough_greens/images/heroImage.png",
                    fullWidth: 1536,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Explore the solutions"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__nIwaN)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fpVia)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Wl9V
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g0C8A
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__pn6Fg
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg__vclPp)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__oj7E2
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__leIja)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__zsfaW
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__x8Jb)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column__dybu)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fLSdy)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/roxborough_greens/images/simpleProject.png",
                    fullWidth: 1000,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            color={"halfDark"}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"How Simple works"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__qdsS)}
            >
              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__iDfWe)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SwapIcon
                    className={classNames(projectcss.all, sty.svg__uErEc)}
                    role={"img"}
                  />
                }
                title={"Initial Contact"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__eFcV4)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SlotIcon
                    className={classNames(projectcss.all, sty.svg__aMc1Y)}
                    role={"img"}
                  />
                }
                title={"Discovery Session"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__jebqe)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <CycleIcon
                    className={classNames(projectcss.all, sty.svg___3MVq)}
                    role={"img"}
                  />
                }
                title={"Contracting"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__zwnfg)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <HammerIcon
                    className={classNames(projectcss.all, sty.svg__sk3Kq)}
                    role={"img"}
                  />
                }
                title={"Fast Prototyping"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__pCyHy)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <PencilIcon
                    className={classNames(projectcss.all, sty.svg__ijykG)}
                    role={"img"}
                  />
                }
                title={"Design Phase"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__xlkhA)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <LightningIcon
                    className={classNames(projectcss.all, sty.svg__iiWcb)}
                    role={"img"}
                  />
                }
                title={"Develop & Launch"}
              />
            </p.Stack>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__c3TgN)} />
            ) : null}
          </Section>

          <Section
            data-plasmic-name={"validation"}
            data-plasmic-override={overrides.validation}
            className={classNames("__wab_instance", sty.validation)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
            }
            title={"Trusted by over 20,000 companies all over the world"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mvh03)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__alNha)}
              >
                <FacebookLogoIcon
                  className={classNames(projectcss.all, sty.svg__jd6Tk)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(projectcss.all, sty.svg__wUb9Y)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(projectcss.all, sty.svg___6JMxh)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(projectcss.all, sty.svg__mO8Za)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(projectcss.all, sty.svg___1MtiT)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

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
  root: [
    "root",
    "header",
    "topSection",
    "solutions",
    "columns",
    "howItWorks",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],

  header: ["header"],
  topSection: ["topSection"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  howItWorks: ["howItWorks"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome2__ArgProps,
      internalVariantPropNames: PlasmicHome2__VariantProps
    });

    return PlasmicHome2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome2";
  } else {
    func.displayName = `PlasmicHome2.${nodeName}`;
  }
  return func;
}

export const PlasmicHome2 = Object.assign(
  // Top-level PlasmicHome2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    howItWorks: makeNodeComponent("howItWorks"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome2
    internalVariantProps: PlasmicHome2__VariantProps,
    internalArgProps: PlasmicHome2__ArgProps
  }
);

export default PlasmicHome2;
/* prettier-ignore-end */
