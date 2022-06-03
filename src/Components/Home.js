import React, { useState } from "react";
import Slider from "react-slick";
import "./Home.css";

import Img1 from "../Imgs/1.png";
import Img2 from "../Imgs/add.png";
import Img3 from "../Imgs/minus.png";
import Img4 from "../Imgs/2.png";
import Img5 from "../Imgs/3.png";
import Img6 from "../Imgs/cloud1.png";
import Img7 from "../Imgs/4.png";
import Img8 from "../Imgs/5.png";
import Img9 from "../Imgs/6.png";
import Img10 from "../Imgs/7.png";
import Img11 from "../Imgs/8.png";
import Img12 from "../Imgs/9.png";
import Img13 from "../Imgs/10.png";
import Img14 from "../Imgs/11.png";
import Img15 from "../Imgs/12.png";
import Img16 from "../Imgs/roadmap.png";
import Img17 from "../Imgs/RD.png";
import Img18 from "../Imgs/Cloud2.png";
import Img19 from "../Imgs/TEAM.png";
import Img20 from "../Imgs/team1.png";
import Img21 from "../Imgs/team2.png";
import Img22 from "../Imgs/team3.png";
import Img23 from "../Imgs/faqs.png";
import MintBtn from "./MintBtn";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="container-fluid AAA">
        <div className="container TopCon">
          <div className="row pt-2  topi">
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img className="btc" src={Img4} />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse "
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                      <li class="nav-item px-4">
                        <a class="nav-link" aria-current="page" href="#About">
                          About
                        </a>
                      </li>
                      <li class="nav-item px-4">
                        <a class="nav-link" href="#Roadmap">
                          RoadMap
                        </a>
                      </li>
                      <li class="nav-item px-4">
                        <a class="nav-link" href="#FAQ">
                          FAQ
                        </a>
                      </li>
                      <li class="nav-item px-4">
                        <a class="nav-link" href="#Team">
                          Team
                        </a>
                      </li>
                      <li class="nav-item px-4">
                        <a class="nav-link" href="#Contacts">
                          Contacts
                        </a>
                      </li>
                    </ul>
                    <a
                      href="https://discord.com/invite/tBmkmtQK"
                      target="_blank"
                    >
                      {" "}
                      <i class="px-1 ndt fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="https://discord.com/invite/YK5ZRXeKAH"
                      target="_blank"
                    >
                      <i class="px-1 ndt fa-brands fa-discord"></i>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="row sev1">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center p-0 ">
              <img className="w-100" src={Img1} />
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row mnt ">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center ">
              <MintBtn />
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row carti">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <img className="cart" src={Img5} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <a id="About"></a>
      <div className="container">
        <div className="row about">
          <div className="col-md-12 text-center">
            <img className="clo" src={Img6} />
            <p className="txt pt-3">
              Spaced Headz NFTs are a collection of 5555 unique digital asset
              art characters on the Ethereum Blockchain designed as a building
              platform for a fun and friendly
              <br />
              web 3 brand with a keen interest in creating both physical and
              virtual value for its holders through a variety of profiles, while
              celebrating new identities in the NFT virtual space
            </p>
            <div>
              <Slider {...settings}>
                <div className="gap">
                  <img className="w-100 round" src={Img7} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img8} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img9} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img10} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img11} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img12} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img13} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img14} />
                </div>
                <div className="gap">
                  <img className="w-100 round" src={Img15} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <a id="Roadmap"></a>
      <div className="container-fluid roadmap">
        <div className="container">
          <div className="row pt-5 ht">
            <div className="col-md-12 text-center">
              <img className="clo" src={Img16} />
              <p className="txt pt-3 text-white">
                Our Roadmap is designed to build a Web 3 brand around the Spaced
                Headz NFT platform to cover various profiles with benefits to
                our holders. Our philosophy is to under-promise and over-deliver
                in these five areas.
                <br />
                Get ready for space!
              </p>
              <img className="RD pt-3 " src={Img17} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid roadmap">
        <div className="container">
          <div className="row pt-5 hto">
            <div className="col-md-12 text-center">
              <img className="clo" src={Img16} />
              <div className="row pt-5">
                <div className="col-md-3 text-left">
                  <img className="clo1" src={Img18} />
                </div>
                <div className="col-md-1 text-left">
                  <h2 className="text-white q1">Q1</h2>
                </div>
                <div className="col-md-8 text-left">
                  <p className="nft">
                    SpacedHeadz NFTs Merchandise. Launch of the Spaced brand and
                    its product lines. Launch SpacedHeadz Alpha Club
                  </p>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-3 text-left">
                  <img className="clo1" src={Img18} />
                </div>
                <div className="col-md-1 text-left">
                  <h2 className="text-white q1">Q1</h2>
                </div>
                <div className="col-md-8 text-left">
                  <p className="nft">
                    The Big one, our mystery airdrop box to all holders. This
                    airdrop will be an NFT designed to also interact with the
                    original NFT or exist separately with access perks
                  </p>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-3 text-left">
                  <img className="clo1" src={Img18} />
                </div>
                <div className="col-md-1 text-left">
                  <h2 className="text-white q1">Q2</h2>
                </div>
                <div className="col-md-8 text-left">
                  <p className="nft">
                    $SPACED Coin : Stack SpacedHeadz NFTs to earn $SPACED.
                    Launch Spaced Headz DAO. SKILLR’s Big Surprise.
                  </p>
                </div>
              </div>
              <div className="row pt-5 own">
                <div className="col-md-3 text-left">
                  <img className="clo1" src={Img18} />
                </div>
                <div className="col-md-1 text-left">
                  <h2 className="text-white q1">Q2</h2>
                </div>
                <div className="col-md-8 text-left">
                  <p className="nft">
                    Spaced Headz already owns land in Arcade Land. All 5555
                    SpaceHeadz NFTs will be integrated into this gaming
                    metaverse as playable avatars after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="Team"></a>
      <div className="container">
        <div className="row tem">
          <div className="col-12 text-center">
            <img className="clo" src={Img19} />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-4 text-center">
            <img className="mem" src={Img20} />
            <h1 className="zio pt-4">ZION</h1>
            <p className="dev">
              Founder, Dev,
              <br />
              Operations Manager
            </p>
            <p className="bra pt-2">@3rdBrain_Zion</p>
          </div>
          <div className="col-md-4 vie">
            <img className="mem" src={Img21} />
            <h1 className="zio pt-4">RUDY</h1>
            <p className="dev">
              Founder, Artist,
              <br />
              Creative Director
            </p>
            <p className="bra pt-2">@mooneth</p>
          </div>
          <div className="col-md-4 vie">
            <img className="mem" src={Img22} />
            <h1 className="zio pt-4">SKILLR</h1>
            <p className="dev">
              Co-Founders,
              <br />
              Dev Managers
            </p>
            <p className="bra pt-2">@SkillrDev</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="txt pt-4">
              Our team is passionate about delivering a world class Web 3 brand
              built around the SpacedHeadz NFT portfolio, with holders as full
              rights owners of each individual NFT asset backed by SKILLR our
              block development hub partners
            </p>
          </div>
        </div>
      </div>
      <a id="FAQ"></a>
      <div className="container-fluid faq ">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 text-center">
              <img className="clo" src={Img23} />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-1"></div>
            <div className="col-10 text-center shad">
              <h1 className="hea">What are SpacedHeadz?</h1>
              <p className="cmk">
                SpacedHeadz are a collection of 5,555 unique characters minted
                on the Ethereum Blockchain designed to give holders access to
                exclusive benefits in our ecosystem
              </p>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row pt-2">
            <div className="col-1"></div>
            <div className="col-10 text-center shad">
              <h1 className="hea">When mint?</h1>
              <p className="cmk">
                When mint? Spacelist (Allowlist/WL Tier 1): Date Loading…– 24Hrs
                – Max 2NFTs Public WLRaffle (Allowlist /WL Tier 2) Date Loading…
                – 24Hrs – Max 2NFTs Public Mint FCFS, Date Loading…1PM EST – Max
                3 NFTS
              </p>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row pt-2">
            <div className="col-1"></div>
            <div className="col-10 text-center shad">
              <h1 className="hea">mint price?</h1>
              <p className="cmk">
                Only 5,555, SpacedHeadz will ever exist, Mint price is set at
                0.05 ETH for our Space-list (WL) and 0.055 for Public Raffle
                Whitelisted FCFS.
              </p>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row pt-2 mpa">
            <div className="col-1"></div>
            <div className="col-10 text-center shad">
              <h1 className="hea">how do i mint? </h1>
              <p className="cmk">
                Click the connect your wallet button on the home page of this
                website, select number of mints, click mint, then approve the
                transaction in your wallet.
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      <a id="Contacts"></a>
      <div className="container-fluid AAAA">
        <div className="container TopCon">
          <div className="row sev1">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center p-0 ">
              <img className="w-100 fdr" src={Img1} />
              <div className="pt-4">
                <a href="https://discord.com/invite/tBmkmtQK" target="_blank">
                  {" "}
                  <i class="px-2 ndt fa-brands fa-twitter"></i>
                </a>
                <a href="https://discord.com/invite/YK5ZRXeKAH" target="_blank">
                  <i class="px-2 ndt fa-brands fa-discord"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-12 text-center pt-5 pb-3">
            <p>Copyright © 2022 Spaced-Headz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
