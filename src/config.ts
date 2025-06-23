import * as fs from 'fs'
import * as yaml from 'yaml'

export const config = {

    env_config_dir: '.env',

    env_config_file: '.env/config.yaml', // 系统配置文件
    // props
    async props(): Promise<any> {
        const data = await fs.promises.readFile(config.env_config_file, 'utf-8')
        return yaml.parse(data)
    },

    // parseProps
    async parseProps(path: string): Promise<any> {
        const data = await fs.promises.readFile(path, 'utf-8')
        return yaml.parse(data)
    },

    // get value
    async get(prop: string): Promise<any> {
        const props = await config.props()
        const keys = prop.split(/\./g).filter((it: string) => it)
        return keys.reduce((obj, k) => {
            if (!obj) {
                return null
            }
            return obj[k]
        }, props)
    },

    getSync(prop: string): any {
        const str = fs.readFileSync(config.env_config_file, 'utf-8')
        const props = yaml.parse(str)
        const keys = prop.split(/\./g).filter((it: string) => it)
        return keys.reduce((obj, k) => {
            if (!obj) {
                return null
            }
            return obj[k]
        }, props)
    }

}