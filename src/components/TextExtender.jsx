import { useState } from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import "../styles/textextender.css";

var texts = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit non cupiditate veniam voluptatem magnam, quaerat voluptates iste in ea nam",
    maxlen: 100,
    showvalue: false,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi officia error neque iste aliquam laudantium, aliquid sed, maxime tenetur nobis corporis similique eius nulla aperiam distinctio aspernatur temporibus cum quis accusantium sequi debitis soluta. Laudantium, unde harum! Esse earum facere accusamus, dolorem deleniti molestiae architecto. Dolorum explicabo numquam eligendi tempora quos distinctio, magni doloribus quaerat alias minus mollitia. Et voluptate sint quam? Aut, laboriosam at sed, tempora temporibus architecto sit nam blanditiis ullam vel ut facere minus cum, aperiam repellat assumenda deleniti consequatur doloremque. Quisquam consequuntur quis perferendis cumque sint, modi placeat. Saepe a cumque laudantium necessitatibus. Temporibus maxime, at velit ducimus quaerat ipsa? Eos voluptatem doloribus voluptate dolor sapiente aliquid ea aut itaque esse ipsam debitis qui illum sequi, fugiat, pariatur, voluptatum impedit dignissimos! Exercitationem eum rerum sequi placeat? Tempora recusandae perspiciatis facilis quasi alias unde ullam veniam deserunt! Assumenda, animi? Obcaecati autem nisi non? Hic laudantium quod amet natus corporis rem quas, autem voluptatum nostrum quibusdam perspiciatis saepe ab, commodi, officia at culpa! Fuga dolorum, laboriosam, quia inventore unde sequi non distinctio aliquid ab temporibus facilis quae recusandae itaque tempore. Quisquam quo iste pariatur quibusdam. Voluptate, molestiae? Vitae sunt veritatis rem voluptatibus minus tempora laborum voluptas similique.",
    maxlen: 500,
    showvalue: false,
  },
  {
    id: 3,
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sequi? Adipisci quos laboriosam voluptates dolores, vel excepturi ea repellat similique quae velit aliquam nihil deleniti modi? Recusandae eveniet reprehenderit sint nam exercitationem consectetur nemo ipsum incidunt. Totam rem, similique velit blanditiis dignissimos id excepturi corrupti quisquam quod ipsam reprehenderit, beatae dolor exercitationem ipsa inventore, maiores ex? Commodi voluptatem obcaecati debitis repellat laboriosam sint illum hic non laudantium, fuga esse reprehenderit numquam rerum vero odio? Ad officiis neque rerum culpa expedita incidunt reiciendis, excepturi, nisi sapiente possimus, quia nulla magnam amet provident! Enim atque ex aperiam, fugit deleniti ipsum aliquid autem.",
    maxlen: 100,
    showvalue: true,
  },
];

const TextExtender = () => {
  return (
    <div id="ctn-ctn">
      <div id="ctn">
        <h2>Text Extender</h2>
        {texts.map((text) => (
          <Extender
            text={text.text}
            maxlen={text.maxlen}
            showvalue={text.showvalue}
            key={text.id}
          />
        ))}
      </div>
      <Fading />
    </div>
  );
};

function Extender({ text, maxlen, showvalue }) {
  const [show, setShow] = useState(showvalue);
  return (
    <p>
      {show ? text : text.slice(0, maxlen) + "..."}{" "}
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          setShow(!show);
        }}
      >
        {show ? "show less" : "show more"}
      </a>
    </p>
  );
}

function Fading() {
  return (
    <div>
      <h1>Welcome to my app!</h1>

      <Fade>
        <p>This content will fade in when scrolled into view</p>
      </Fade>

      {/* Multiple elements will animate together */}
      <Fade cascade>
        <h2>Features</h2>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </Fade>
    </div>
  );
}

Extender.propTypes = {
  text: PropTypes.string,
  maxlen: PropTypes.number,
  showvalue: PropTypes.bool,
};
export default TextExtender;
