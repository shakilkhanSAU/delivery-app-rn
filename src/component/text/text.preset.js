
import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";

const Base = {
    fontFamily: typography.primary,
    fontSize: 18,
    color: colors.black
}

const Bold = {
    fontFamily: typography.primaryBold,
    color: colors.black,
}


export const presets = {
    default: Base,
    bold: Bold,
    h1: {
        ...Bold, fontSize: 36
    },
    h2: {
        ...Bold, fontSize: 34
    },
    h3: {
        ...Bold, fontSize: 32
    },
    h4: {
        ...Bold, fontSize: 20
    }
}