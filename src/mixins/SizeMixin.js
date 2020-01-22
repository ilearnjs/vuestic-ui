const sizes = {
  small: 32,
  medium: 48,
  large: 64,
}

const iconSizes = {
  small: 16,
  medium: 24,
  large: 32,
}

export const SizeMixin = {
  props: {
    size: {
      type: [String, Number],
      default: 'medium',
      validator: size => {
        return typeof size === 'string' || typeof size === 'number'
      },
    },
  },
  computed: {
    sizeComputed () {
      if (typeof this.size === 'string') {
        return this.size in sizes ? `${sizes[this.size]}px` : this.size
      }
      return `${this.size}px`
    },
    iconSizeComputed () {
      if (typeof this.size === 'string') {
        return this.size in sizes ? `${iconSizes[this.size]}px` : this.size
      }
      return `${this.size}px`
    },
  },
}
