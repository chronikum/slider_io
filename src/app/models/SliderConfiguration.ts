export interface SliderConfiguration {
    sliderId: number,
    left?: string,
    right?: string,
    vertical?: boolean,
    max?: number,
    min?: number,
    step?: number,
    fillColor?: string,
    colorMode: number,
    value?: number,
    tickInterval?: number
    invert?: boolean,
    thumbLabel?: boolean
}