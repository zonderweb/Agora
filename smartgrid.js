const smartgrid = require('smart-grid');

const settings = {
		filename: "_smartgrid",
		outputStyle: "scss",
    columns: 12,
    offset: '0px', // Межколоночный отступ
    container: {
        maxWidth: '1500px',
        fields: '0px' // Внутренние отступы
    },
    breakPoints: {
		bmd: {
			width: "1170px",
			fields: "15px"
		},
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xsm: {
            width: "620px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "10px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid ('./app/scss', settings);