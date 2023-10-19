// Register Block 3
registerBlockType('custom-gutenberg-blocks/block-3', {
    title: 'Contact Form Block',
    icon: 'email-alt2',
    category: 'common',
    attributes: {},
    edit: (props) => {
      const { className } = props;
  
      return (
        <section>
          <div className={`container my-5 p-2 p-sm-5 ${className}`}>
            <div className="text-center">
              <h1 className="fw-bolder fs-2 mb-5">Contact Form</h1>
            </div>
            <div className="px-5">
              <form action="" className="custom-form">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                  />
                </div>
  
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                  />
                </div>
  
                <div className="mb-3">
                  <label className="form-label">Your Phone</label>
                  <input
                    type="number"
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                    rows="3"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="btn btn-blue text-white py-2 px-3 rounded-0"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    },
    save: () => {
      return (
        <section>
          <div className="container my-5 p-2 p-sm-5">
            <div className="text-center">
              <h1 className="fw-bolder fs-2 mb-5">Contact Form</h1>
            </div>
            <div className="px-5">
              <form action="" className="custom-form">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                  />
                </div>
  
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                  />
                </div>
  
                <div className="mb-3">
                  <label className="form-label">Your Phone</label>
                  <input
                    type="number"
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-control form-control-lg bg-light rounded-0 border-1 border-dark"
                    rows="3"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="btn btn-blue text-white py-2 px-3 rounded-0"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    },
  });
  