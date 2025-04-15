import PhoneMask from '@pivsemdmi/phone-mask-js'

const formMaskTel = function(){
    new PhoneMask('#tel', {
        'mask': '+1 ___-___-____',
        'trimMask': true,
    });
}

export default formMaskTel;