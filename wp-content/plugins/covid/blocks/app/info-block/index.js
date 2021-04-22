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

const getMessage = (primary_header, secondary_header, message) => {
    return (
        <div>
            <h3 className="title-1"> {primary_header} </h3>
            <h2 className="title-2"> {secondary_header} </h2>
            <p className="message"> {message} </p>
        </div>
    );
}

const getButton = (button_text) => {
    return (
        <div>
            <button type="button" className="btn alert-btn"
                    data-toggle="modal" data-target="#myModal">
                {button_text}
            </button>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{button_text}</h4>
                        </div>
                        <div className="modal-body">
                            <p>This is a small modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
        },
        button_text: {
            type: 'text'
        },
        text_alignment: {
            type: 'string',
        },
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
            <BlockControls>
                <AlignmentToolbar
                    value={props.attributes.text_alignment}
                    onChange={(value) => {
                        console.log(value)
                        props.setAttributes({text_alignment: value})
                    }}
                />
            </BlockControls>,
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
                    <TextareaControl
                        label={__('Button', 'covid')}
                        help={__('Button label. This button opens a modal ' +
                            'with email and message fields.', 'covid')}
                        value={props.attributes.button_text}
                        onChange={(new_val) => {
                            props.setAttributes({button_text: new_val})
                        }}/>
                </PanelBody>
            </InspectorControls>,
            <div className="row part">
                <div id="info-content" className="container col-sm info">
                    {getMessage(props.attributes.primary_header,
                        props.attributes.secondary_header, props.attributes.message)}
                    <button type="button" className="btn alert-btn"
                            data-toggle="modal" data-target="#myModal">
                        {props.attributes.button_text}
                    </button>
                </div>
            </div>,
            <div className={props.className}>
                {props.attributes.img_ID ? (
                    getImage(props.attributes.img_URL, props.attributes.img_alt)
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
        switch (props.attributes.text_alignment) {
            case'right':
                return (
                    <div className="row part">
                        <div className="container col-sm image image-right">
                            {getImage(props.attributes.img_URL, props.attributes.img_alt)}
                        </div>
                        <div id="info-content" className="container col-sm info">
                            {getMessage(props.attributes.primary_header,
                                props.attributes.secondary_header, props.attributes.message)}
                            {getButton(props.attributes.button_text)}
                        </div>
                    </div>
                );
            case'left':
                return (
                    <div className="row part">
                        <div id="info-content" className="container col-sm info">
                            {getMessage(props.attributes.primary_header,
                                props.attributes.secondary_header, props.attributes.message)}
                            {getButton(props.attributes.button_text)}
                        </div>
                        <div className="container col-sm image image-right">
                            {getImage(props.attributes.img_URL, props.attributes.img_alt)}
                        </div>
                    </div>
                );
            case'center':
                return (
                    <div className="center-block">
                        <div id="info-content" className="container center-block">
                            {getMessage(props.attributes.primary_header,
                                props.attributes.secondary_header, props.attributes.message)}
                            {getButton(props.attributes.button_text)}
                        </div>
                        <div className="container image center-block">
                            {getImage(props.attributes.img_URL, props.attributes.img_alt)}
                        </div>
                    </div>
                )
        }
    },
});
