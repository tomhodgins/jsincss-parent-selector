export default (selector, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.parentElement)
    .forEach(tag => {

      const attr = selector.replace(/\W/g, '')

      tag.parentElement.setAttribute(`data-parent-${attr}`, count)
      styles += `[data-parent-${attr}="${count}"] { ${rule} }\n`
      count++

    })

  return styles

}