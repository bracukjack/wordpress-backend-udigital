// Register Block 4
registerBlockType('custom-gutenberg-blocks/block-4', {
    title: 'Contact Section Block',
    icon: 'welcome-widgets-menus',
    category: 'common',
    attributes: {},
    edit: () => {
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
                <a href={home_url('contact')} className="btn btn-blue py-2 px-3 text-white rounded-0">
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    },
    save: () => {
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
                <a href={home_url('contact')} className="btn btn-blue py-2 px-3 text-white rounded-0">
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    },
  });
  