import React from "react";
import Image from "./image";
import Score from "./score";
import Container from "./container";
import _ from "lodash";
import Row from "./row";
import Col from "./col";

class ImageContainer extends React.Component {
  state = {
    images: [
      {
        src:
          "https://thumbs-prod.si-cdn.com/qXrJJ-l_jMrQbARjnToD0fi-Tsg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg",
        alt: "fish",
        clicked: false
      },
      {
        src:
          "https://cdn-images-1.medium.com/max/2600/1*mJ11PM4ZSBF0ZIAj5TebIw.png",
        alt: "fish 2",
        clicked: false
      },
      {
        src:
          "https://robbreportedit.files.wordpress.com/2019/01/shutterstock_755489131.jpg?w=1024",
        alt: "fish 4",
        clicked: false
      },
      {
        src:
          "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Fish/H-P/pufferfish-closeup.ngsversion.1427141760081.adapt.1900.1.jpg",
        alt: "fish 5",
        clicked: false
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/220px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg",
        alt: "fish 6",
        clicked: false
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK_9Sh-iTLBni5h72m3bq64L6xgY6tdtO3zwG_gMhYLvG_GyY",
        alt: "fish 7",
        clicked: false
      },
      {
        src:
          "https://cbsnews1.cbsistatic.com/hub/i/r/2018/10/29/edf8703e-590e-4cdf-98a7-95cc2355387b/thumbnail/1200x630/75b0462a423f0f938d746fccbdf99f6c/screen-shot-2018-10-29-at-1-38-58-pm.jpg",
        alt: "fish 8",
        clicked: false
      },
      {
        src: "https://i.ytimg.com/vi/cC9r0jHF-Fw/maxresdefault.jpg",
        alt: "fish 9",
        clicked: false
      },
      {
        src:
          "https://cdn.brainpop.com/science/diversityoflife/fish/screenshot1.png",
        alt: "fish 10",
        clicked: false
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTo0svLOzWN_RhJkEOzLZzIwhUKjs8rq4_0rX3k9EQbAD7fPws",
        alt: "fish 11",
        clicked: false
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CEe0vJxhXNPnx0UZbeKRgE6GFGZrHo4EY3IutP3wgOzDNB_8sA",
        alt: "fish 12",
        clicked: false
      },
      {
        src:
          "https://cdnph.upi.com/svc/sv/i/4881540575073/2018/1/15405765522500/Fish-evolved-near-shorelines-not-in-deep-waters-study-says.jpg",
        alt: "fish 13",
        clicked: false
      },
      {
        src: "https://cdn.britannica.com/85/132085-131-C5B5089E.jpg",
        alt: "fish 14",
        clicked: false
      },
      {
        src:
          "https://www.niwa.co.nz/sites/niwa.co.nz/files/sites/default/files/imported/attachments/106329/giant-kokopu.jpg",
        alt: "fish 15",
        clicked: false
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHMkYnsue5CW6xFQ2tDO2_YemUc0ayfAJQ8Qnf-yBog_P-f909g",
        alt: "fish 16",
        clicked: false
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpntRZmSadftHB2jryf0ebARcEr29LI6WfOhdERCU3_OkIyGgG",
        alt: "fish 17",
        clicked: false
      },
      {
        src:
          "https://fullserviceaquatics.com/wp-content/uploads/2012/08/orange-bubble-fish2.jpg",
        alt: "fish 18",
        clicked: false
      },
      {
        src: "http://media.heartlandtv.com/images/spring-pygmy-sunfish.jpg",
        alt: "fish 19",
        clicked: false
      },
      {
        src:
          "https://oceanconservancy.org/wp-content/uploads/2017/04/sustainable2.jpg",
        alt: "fish 20",
        clicked: false
      },
      {
        src:
          "https://cdn.shoplightspeed.com/shops/609770/files/3135713/380x275x1/reef-safe.jpg",
        alt: "fish 3",
        clicked: false
      }
    ],
    score: 0,
    topScore: 0
  };

  // componentDidMount() {
  //   const shuffledimages = _.shuffle(this.state.images);
  //   this.setState({ ...this.state, images: shuffledimages });
  // }

  handleClickedImage = e => {
    e.stopPropagation();
    const { images } = this.state;
    let newScore;
    const matchSrc = e.target.src;
    const imageMap = images.map(image => {
      if (matchSrc === image.src) {
        return { ...image, clicked: true };
      }
      return image;
    });

    const checkScore = images.filter(image => {
      if (matchSrc === image.src) return image;
    });

    const { score } = this.state;
    if (!checkScore[0].clicked) {
      const shuffledimages = _.shuffle(imageMap);
      newScore = score + 1;
      this.setState({ ...this.state, images: shuffledimages, score: newScore });
    } else {
      newScore = 0;
      const restartImages = images.map(image => {
        return { ...image, clicked: false };
      });
      const shuffledimages = _.shuffle(restartImages);
      console.log(shuffledimages);
      console.log(this.state.images);
      this.setState({ ...this.state, images: shuffledimages, score: newScore });
    }

    //NOW DO SOME LOGIC TO UPDATE THE SCORE

    //NEVER DO THE BELOW, ALWAYS CREATE A NEW STATE WITH A VARIABLE AND PASS IT TO SETSTATE

    //match clicked src to images state map over
    // this.state.clicked
    //   ? this.setState({ score: 0, clicked: false })
    //   : this.setState({ clicked: true, score: stateScore + 1 });
  };

  render() {
    const { images } = this.state;
    return (
      <Container>
        <Row>
          <Col size={"12"}>
            <Score score={this.state.score} topScore={this.state.topScore} />
          </Col>
        </Row>
        <Row>
          {images.map(image => {
            return (
              <Image
                src={image.src}
                alt={image.alt}
                key={image.src}
                handleClickedImage={this.handleClickedImage}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default ImageContainer;
