// Import dependencies from the WordPress block editor
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
import "../css/custom.css";

// Register Block 1
registerBlockType("custom-gutenberg-blocks/block-1", {
  title: "Home Section Block 1",
  icon: "welcome-add-page",
  category: "common",
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: ".fw-bolder",
    },
    description: {
      type: "string",
      source: "html",
      selector: ".text-secondary",
    },
    buttonText: {
      type: "string",
      source: "html",
      selector: ".btn-orange",
    },
    buttonLink: {
      type: "string",
      default: "#", // Default link value
    },
  },
  edit: (props) => {
    const { attributes, setAttributes, className } = props;

    return (
      <div className={className}>
        <RichText
          tagName="h1"
          placeholder="Enter title here"
          value={attributes.title}
          onChange={(title) => setAttributes({ title })}
        />
        <RichText
          tagName="p"
          placeholder="Enter description here"
          value={attributes.description}
          onChange={(description) => setAttributes({ description })}
        />
        <RichText
          tagName="a"
          placeholder="Enter button text here"
          value={attributes.buttonText}
          onChange={(buttonText) => setAttributes({ buttonText })}
        />
        <RichText
          tagName="input"
          type="url"
          placeholder="Enter button link here"
          value={attributes.buttonLink}
          onChange={(buttonLink) => setAttributes({ buttonLink })}
        />
      </div>
    );
  },
  save: (props) => {
    const { attributes } = props;

    return (
      <section>
        <div className="container py-5 text-center">
          <div className="row gx-5 align-items-center">
            <div className="col-12 col-lg-5 text-start">
              <div className="d-flex flex-column align-items-start gap-4">
                <h1 className="fw-bolder">{attributes.title}</h1>
                <p className="text-secondary">{attributes.description}</p>
                <a
                  href={attributes.buttonLink}
                  className="btn btn-orange text-white py-2 px-3 rounded-0"
                >
                  {attributes.buttonText}
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <img
                src={get_template_directory_uri() + "/assets/home.svg"}
                alt="home"
                className="img-fluid d-block object-fit-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  },
});

// Register Block 2
registerBlockType("custom-gutenberg-blocks/block-2", {
  title: "Service Section Block",
  icon: "screenoptions",
  category: "common",
  attributes: {
    services: {
      type: "array",
      default: [
        {
          icon: "bi-cart2",
          title: "Store Integration",
          description:
            "Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.",
        },
        {
          icon: "bi-shield",
          title: "Data Protection",
          description:
            "Ne nam phaedrum consequat, adhuc aliquid ea pri, eum eligendi incorrupte referrentur in. Vix ad senserit salutandi argumentum. Ei eam definiebas reformidans, exerci persecuti no ius.",
        },
        {
          icon: "bi-tag",
          title: "Invoice Generator",
          description:
            "Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea cu. Pro ex integre pertinax. Cu cum harum paulo legendos, mei et quod enim mnesarchum, habeo affert laoreet sea ei.",
        },
        {
          icon: "bi-send",
          title: "Auto Responder",
          description:
            "Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.",
        },
        {
          icon: "bi-share",
          title: "Social Plugins",
          description:
            "Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.",
        },
        {
          icon: "bi-database",
          title: "Data Backup",
          description:
            "Ne nam phaedrum consequat, adhuc aliquid ea pri, eum eligendi incorrupte referrentur in. Vix ad senserit salutandi argumentum. Ei eam definiebas reformidans, exerci persecuti no ius.",
        },
      ],
    },
  },
  edit: (props) => {
    const { attributes, setAttributes, className } = props;

    const onServiceChange = (index, key, value) => {
      const newServices = [...attributes.services];
      newServices[index][key] = value;
      setAttributes({ services: newServices });
    };

    return (
      <div className={className}>
        <div className="container my-5 py-5">
          <div className="justify-content-center">
            <h2 className="text-center fw-bold fs-2 my-5">Our Services</h2>

            <div className="row">
              {attributes.services.map((service, index) => (
                <div
                  key={index}
                  className="d-flex flex-column gap-2 align-items-center p-3 justify-content-center col-lg-4 col-sm-6 col-12"
                >
                  <i className={`bi ${service.icon} text-primary fs-2`}></i>
                  <RichText
                    tagName="p"
                    placeholder="Enter title here"
                    value={service.title}
                    onChange={(title) => onServiceChange(index, "title", title)}
                    className="fw-semibold fs-4"
                  />
                  <RichText
                    tagName="p"
                    placeholder="Enter description here"
                    value={service.description}
                    onChange={(description) =>
                      onServiceChange(index, "description", description)
                    }
                    className="text-black fs-6 fw-light text-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: (props) => {
    const { attributes } = props;

    return (
      <section>
        <div className="container my-5 py-5">
          <div className="justify-content-center">
            <h2 className="text-center fw-bold fs-2 my-5">Our Services</h2>

            <div className="row">
              {attributes.services.map((service, index) => (
                <div
                  key={index}
                  className="d-flex flex-column gap-2 align-items-center p-3 justify-content-center col-lg-4 col-sm-6 col-12"
                >
                  <i className={`bi ${service.icon} text-primary fs-2`}></i>
                  <p className="fw-semibold fs-4">{service.title}</p>
                  <p className="text-black fs-6 fw-light text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
});

// Register Block 3
registerBlockType("custom-gutenberg-blocks/block-3", {
  title: "Contact Form Block",
  icon: "email-alt2",
  category: "common",
  attributes: {
    formAction: {
      type: "string",
      default: "",
    },
  },
  edit: (props) => {
    const { className, attributes, setAttributes } = props;

    return (
      <section>
        <div className={`container my-5 p-2 p-sm-5 ${className}`}>
          <div className="text-center">
            <h1 className="fw-bolder fs-2 mb-5">Contact Form</h1>
          </div>
          <div className="px-5">
            <form action={attributes.formAction} className="custom-form">
              {/* ... Form input elements ... */}
            </form>
          </div>
        </div>
      </section>
    );
  },
  save: (props) => {
    const { attributes } = props;

    return (
      <section>
        <div className="container my-5 p-2 p-sm-5">
          <div className="text-center">
            <h1 className="fw-bolder fs-2 mb-5">Contact Form</h1>
          </div>
          <div className="px-5">
            <form action={attributes.formAction} className="custom-form">
              {/* ... Form input elements ... */}
            </form>
          </div>
        </div>
      </section>
    );
  },
});

// Register Block 4
registerBlockType("custom-gutenberg-blocks/block-4", {
  title: "Contact Section Block",
  icon: "welcome-widgets-menus",
  category: "common",
  attributes: {
    buttonText: {
      type: "string",
      default: "Get A Quote",
    },
    buttonLink: {
      type: "string",
      default: home_url("contact"),
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;

    return (
      <section>
        <div className="mt-5 py-5 bg-gradient-orange">
          <div className="container py-5">
            <div className="text-white flex-column text-center">
              <h2 className="fw-bold fs-2 text-white">Ready to get started?</h2>
              <p className="fw-light fs-6 text-white">
                Take control of your Business Data. <br />
                Try saas to make your business better
              </p>
              <a
                href={attributes.buttonLink}
                className="btn btn-blue py-2 px-3 text-white rounded-0"
              >
                {attributes.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  },
  save: (props) => {
    const { attributes } = props;

    return (
      <section>
        <div className="mt-5 py-5 bg-gradient-orange">
          <div className="container py-5">
            <div className="text-white flex-column text-center">
              <h2 className="fw-bold fs-2 text-white">Ready to get started?</h2>
              <p className="fw-light fs-6 text-white">
                Take control of your Business Data. <br />
                Try saas to make your business better
              </p>
              <a
                href={attributes.buttonLink}
                className="btn btn-blue py-2 px-3 text-white rounded-0"
              >
                {attributes.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
