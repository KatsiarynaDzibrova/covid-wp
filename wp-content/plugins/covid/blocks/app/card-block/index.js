const {registerBlockType} = wp.blocks;
const {
    InspectorControls, MediaUpload,
    AlignmentToolbar, BlockControls,
    MediaUploadCheck
} = wp.editor;
const {__} = wp.i18n;
const {
    PanelBody, TextareaControl,
    CheckboxControl, Button,
    RadioControl, RangeControl
} = wp.components;

const getImage = (img_URL, img_alt) => {
    return (
        <img src={img_URL} alt={img_alt}/>
    );
};


registerBlockType('covid/card', {
    title: __('Card', 'covid'),
    description: __('Card.', 'covid'),
    category: 'common',
    attributes: {
        header: {
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
        },
    },
    edit: (props) => {
        const add_img = (media) => {
            props.setAttributes({
                img_ID: media.id,
                img_alt: media.url,
                img_URL: media.url
            })
        };
        const remove_img = () => {
            props.setAttributes({
                img_ID: null,
                img_URL: null,
                img_alt: null,
            });
        };
        return [
            <InspectorControls>
                <PanelBody title={__('Input Examples', 'covid')}>
                    <TextareaControl
                        label={__('Primary header', 'covid')}
                        help={__('The first header', 'covid')}
                        value={props.attributes.header}
                        onChange={(new_val) => {
                            props.setAttributes({header: new_val})
                        }}/>
                    <TextareaControl
                        label={__('message', 'covid')}
                        help={__('message content', 'covid')}
                        value={props.attributes.message}
                        onChange={(new_val) => {
                            props.setAttributes({message: new_val})
                        }}/>
                </PanelBody>
            </InspectorControls>,
            <div className={props.className}>
                {props.attributes.img_ID ? (
                    <div className="image-ctr">
                        <img src={props.attributes.img_URL} alt={props.attributes.img_alt}/>
                        {props.isSelected ? (
                            <Button className="btn-remove" onClick={remove_img}>
                                Remove
                            </Button>
                        ) : null}
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
            <div id="info-content" className="info-card-message center-block">
                <h3 className="title-2 info-title"> {props.attributes.header} </h3>
                <p className="props.attributes.message"> {props.attributes.message} </p>
            </div>
        ];
    },
    save: (props) => {
        return (
            <div className="info-card center-block container">
                <div className="image center-block">
                    <img class="info-carg-img" src={props.attributes.img_URL} alt={props.attributes.img_alt}/>
                </div>
                <div id="info-content" className="info-card-message center-block">
                    <h3 className="title-2 info-title"> {props.attributes.header} </h3>
                    <p className="props.attributes.message"> {props.attributes.message} </p>
                </div>
            </div>
        );
    },
});
