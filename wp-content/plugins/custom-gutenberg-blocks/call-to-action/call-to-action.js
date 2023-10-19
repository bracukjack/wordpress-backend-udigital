// Import dependencies from the WordPress block editor
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

// Register Block 1
registerBlockType('custom-gutenberg-blocks/block-1', {
  title: 'Home Section Block 1',
  icon: 'welcome-add-page',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.fw-bolder',
    },
    description: {
      type: 'string',
      source: 'html',
      selector: '.text-secondary',
    },
    buttonText: {
      type: 'string',
      source: 'html',
      selector: '.btn-orange',
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
                  href={attributes.buttonLink || '#'}
                  className="btn btn-orange text-white py-2 px-3 rounded-0"
                >
                  {attributes.buttonText}
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <img
                src={get_template_directory_uri() + '/assets/home.svg'}
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