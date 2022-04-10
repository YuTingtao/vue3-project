import dev from './dev.js'
import test from './test.js'
import prod from './prod.js'

let config

if (process.env.NODE_ENV === 'production') {
    switch (process.env.VUE_APP_ENV) {
        case 'prod':
            config = prod
            break;
        case 'test':
            config = test
            break;
        case 'dev':
            config = dev
            break;
        default:
            break;
    }
} else {
    config = dev
}

export default config
