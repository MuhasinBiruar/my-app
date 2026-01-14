const hover = (scaleNum: number) => `transition-transform duration-300 ease-in-out hover:scale-${scaleNum}`;

export const divGap = (gapNum: number) => `flex items-center gap-${gapNum}`;

const utilities = {hover, divGap};
export default utilities;

