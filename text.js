const htmlContent = `<h1>heading1 </h1><h2>heading2</h2><h3>heading3</h3><h4>heading4</h4><h5>heading5</h5><h6>heading6</h6><p></p><p><b>Bold\n</b><i>Italic</i></p><p><u>underline</u></p><ul><li><p>bulets1</p></li><li><p>bullet2</p></li><li><p>bullet3</p></li></ul><p></p><ol><li><p>number1</p></li><li><p>number2</p></li><li><p>number3</p></li></ol><p></p>`;

const htmlToContentArray = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const content = [];

  doc.body.childNodes.forEach((node) => {
    const nodeType = node.tagName ? node.tagName.toLowerCase() : '';

    if (nodeType === 'h1' || nodeType === 'h2' || nodeType === 'h3' || nodeType === 'h4' || nodeType === 'h5' || nodeType === 'h6') {
      content.push({
        nodeType: `heading-${nodeType.charAt(1)}`,
        content: [{ nodeType: 'text', value: node.textContent }],
      });
    } else if (nodeType === 'p') {
      if (node.children.length === 0) {
        content.push({
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: '' }],
        });
      } else {
        const paragraphContent = [];
        node.childNodes.forEach((childNode) => {
          if (childNode.nodeType === Node.TEXT_NODE) {
            paragraphContent.push({ nodeType: 'text', value: childNode.textContent });
          } else {
            const childNodeType = childNode.tagName ? childNode.tagName.toLowerCase() : '';
            paragraphContent.push({
              nodeType: childNodeType,
              content: [{ nodeType: 'text', value: childNode.textContent }],
            });
          }
        });
        content.push({
          nodeType: 'paragraph',
          content: paragraphContent,
        });
      }
    } else if (nodeType === 'ul' || nodeType === 'ol') {
      const listItems = [];
      node.querySelectorAll('li').forEach((li) => {
        const listItemContent = [];
        li.childNodes.forEach((childNode) => {
          if (childNode.nodeType === Node.TEXT_NODE) {
            listItemContent.push({ nodeType: 'text', value: childNode.textContent });
          } else {
            const childNodeType = childNode.tagName ? childNode.tagName.toLowerCase() : '';
            listItemContent.push({
              nodeType: childNodeType,
              content: [{ nodeType: 'text', value: childNode.textContent }],
            });
          }
        });
        listItems.push({
          nodeType: 'list-item',
          content: listItemContent,
        });
      });

      content.push({
        nodeType,
        content: listItems,
      });
    }
  });

  return content;
};

const contentArray = htmlToContentArray(htmlContent);
console.log(contentArray);