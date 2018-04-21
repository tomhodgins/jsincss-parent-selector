export default (selector, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.parentElement)

    .reduce((styles, tag, count) => {

      const attr = selector.replace(/\W/g, '')

      tag.parentElement.setAttribute(`data-parent-${attr}`, count)
      styles += `[data-parent-${attr}="${count}"] { ${rule} }\n`
      count++

      return styles

    }, '')

}
