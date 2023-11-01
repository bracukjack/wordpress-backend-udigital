(function () {
  var el = wp.element.createElement;
  var registerBlockType = wp.blocks.registerBlockType;
  var InspectorControls = wp.editor.InspectorControls;
  var TextControl = wp.components.TextControl;
  var IconPicker = wp.components.IconPicker;

  registerBlockType("custom-gutenberg-blocks/feature-block", {
    title: "Feature Block",
    icon: "admin-tools",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: "Feature Title",
        source: "children",
        selector: "p",
      },
      description: {
        type: "string",
        default: "Feature Description",
        source: "children",
        selector: "p",
      },
      icon: {
        type: "string",
        default: "bi bi-star", // Default icon class
      },
    },
    edit: function (props) {
      var attributes = props.attributes;

      function onTitleChange(newTitle) {
        props.setAttributes({ title: newTitle });
      }

      function onDescriptionChange(newDescription) {
        props.setAttributes({ description: newDescription });
      }

      function onIconChange(newIcon) {
        props.setAttributes({ icon: newIcon });
      }

      return el(
        "div",
        null,
        el(
          InspectorControls,
          {
            key: "inspector",
          },
          el(TextControl, {
            label: "Title",
            value: attributes.title,
            onChange: onTitleChange,
          }),
          el(TextControl, {
            label: "Description",
            value: attributes.description,
            onChange: onDescriptionChange,
          }),
          el(IconPicker, {
            label: "Icon",
            value: attributes.icon,
            onChange: onIconChange,
          })
        ),

        el(
          "div",
          { className: "justify-content-center" },

          el(
            "div",
            {
              className: "d-flex flex-column gap-2 align-items-center",
            },
            el("i", { className: attributes.icon + " text-primary fs-2" }),
            el("p", { className: "fw-semibold fs-4" }, attributes.title),
            el(
              "p",
              { className: "text-black fs-6 fw-light text-center" },
              attributes.description
            )
          )
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;

      return el(
        el(
          "div",
          { className: "justify-content-center" },

          el(
            "div",
            {
              className:
                "d-flex flex-column gap-2 align-items-center  justify-content-center",
            },
            el("i", { className: attributes.icon + " text-primary fs-2" }),
            el("p", { className: "fw-semibold fs-4" }, attributes.title),
            el(
              "p",
              { className: "text-black fs-6 fw-light text-center" },
              attributes.description
            )
          )
        )
      );
    },
  });
})();
