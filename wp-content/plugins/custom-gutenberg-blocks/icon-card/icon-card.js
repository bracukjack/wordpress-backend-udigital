// Register Block 2
registerBlockType('custom-gutenberg-blocks/block-2', {
    title: 'Service Section Block',
    icon: 'screenoptions',
    category: 'common',
    attributes: {
      services: {
        type: 'array',
        default: [
          {
            icon: 'bi-cart2',
            title: 'Store Integration',
            description:
              'Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.',
          },
          {
            icon: 'bi-shield',
            title: 'Data Protection',
            description:
              'Ne nam phaedrum consequat, adhuc aliquid ea pri, eum eligendi incorrupte referrentur in. Vix ad senserit salutandi argumentum. Ei eam definiebas reformidans, exerci persecuti no ius.',
          },
          {
            icon: 'bi-tag',
            title: 'Invoice Generator',
            description:
              'Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea cu. Pro ex integre pertinax. Cu cum harum paulo legendos, mei et quod enim mnesarchum, habeo affert laoreet sea ei.',
          },
          {
            icon: 'bi-send',
            title: 'Auto Responder',
            description:
              'Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.',
          },
          {
            icon: 'bi-share',
            title: 'Social Plugins',
            description:
              'Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.',
          },
          {
            icon: 'bi-database',
            title: 'Data Backup',
            description:
              'Ne nam phaedrum consequat, adhuc aliquid ea pri, eum eligendi incorrupte referrentur in. Vix ad senserit salutandi argumentum. Ei eam definiebas reformidans, exerci persecuti no ius.',
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
                      onChange={(title) => onServiceChange(index, 'title', title)}
                      className="fw-semibold fs-4"
                    />
                    <RichText
                      tagName="p"
                      placeholder="Enter description here"
                      value={service.description}
                      onChange={(description) => onServiceChange(index, 'description', description)}
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
                    <p className="text-black fs-6 fw-light text-center">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    },
  });
  