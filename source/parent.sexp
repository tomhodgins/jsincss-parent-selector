mixin('parent', ['selector', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    filterFunc('tag.parentElement',
      reduceFunc(
        createAttribute(['selector'],
          addAttribute('tag.parentElement', 'parent',
            addRule('', '', 'parent')))))))
