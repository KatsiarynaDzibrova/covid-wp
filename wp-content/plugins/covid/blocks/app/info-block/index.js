const {registerBlockType} = wp.blocks;
const {
    InspectorControls, MediaUpload,
    MediaUploadCheck
} = wp.editor;
const {__} = wp.i18n;
const {
    PanelBody, TextareaControl,
    CheckboxControl, Button,
    RadioControl, RangeControl
} = wp.components;

registerBlockType('udemy/inspector-controls-example', {
    title: __('Info', 'recipe'),
    description: __('Info.', 'recipe'),
    category: 'common',
    attributes: {
        primary_header: {
            type: 'text',
        },
        secondary_header: {
            type: 'text',
        },
        message: {
            type: 'text',
        },
        img_ID: {
            type: 'number',
        },
        img_alt: {
            type: 'string',
            source: 'attribute',
            attribute: 'alt',
            selector: 'img'
        },
        img_URL: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img'
        }
    },
    edit: (props) => {
        add_img = (media) => {
            props.setAttributes({
                img_ID: media.id,
                img_alt: media.url,
                img_URL: media.url
            })
        };
        return [
            <InspectorControls>
                <PanelBody title={__('Input Examples', 'covid')}>
                    <TextareaControl
                        label={__('Primary header', 'covid')}
                        help={__('The first header', 'covid')}
                        value={props.attributes.primary_header}
                        onChange={(new_val) => {
                            props.setAttributes({primary_header: new_val})
                        }}/>
                    <TextareaControl
                        label={__('Secondary header', 'covid')}
                        help={__('The second header', 'covid')}
                        value={props.attributes.secondary_header}
                        onChange={(new_val) => {
                            props.setAttributes({secondary_header: new_val})
                        }}/>
                    <TextareaControl
                        label={__('Message', 'covid')}
                        help={__('Message content', 'covid')}
                        value={props.attributes.message}
                        onChange={(new_val) => {
                            props.setAttributes({message: new_val})
                        }}/>
                </PanelBody>
            </InspectorControls>,
            <div className="row part">
                <div id="info-content" className="container col-sm info">
                    <h3 className="title-1"> {props.attributes.primary_header} </h3>
                    <h2 className="title-2"> {props.attributes.secondary_header} </h2>
                    <p className="message"> {props.attributes.message} </p>
                </div>
            </div>,
            <div className={props.className}>
                {props.attributes.img_ID ? (
                    <div className="container col-sm image image-right">
                        <img src={props.attributes.img_URL} alt={props.attributes.img_alt}/>
                    </div>
                ) : (
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => {
                                add_img(media)
                            }}
                            allowedTypes={['image']}
                            value={props.attributes.img_ID}
                            render={({open}) => (
                                <Button className={"button button-large"}
                                        onClick={open}
                                >
                                    Open Media Library
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                )}
            </div>,
        ];
    },
    save: (props) => {
        return (
            <div className="row part">
                <div id="info-content" className="container col-sm info">
                    <h3 className="title-1"> {props.attributes.primary_header} </h3>
                    <h2 className="title-2"> {props.attributes.secondary_header} </h2>
                    <p className="message"> {props.attributes.message} </p>
                </div>
                <div className="container col-sm image image-right">
                    <img src={props.attributes.img_URL} alt={props.attributes.img_alt}/>
                </div>
            </div>
        )
    },

});
