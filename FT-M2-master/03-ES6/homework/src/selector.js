var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl)
  // if (startEl.children.length) {
    for (let i = 0; i < startEl.children.length; i++) {
      var collectedElements = traverseDomAndCollectElements(matchFunc, startEl.children[i])
      resultSet = [...resultSet, ...collectedElements] // resultSet.concat(colle)
    }
    return resultado
  // }

  /**
   * dibuja la question 
   * recorre el arbol del Dom
   * en cada modo del arbol,preguntar si ese elemento es el que estoy buscando
   * 
   */
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id'
  if (selector[0] === '.') return 'class'
  if (selector.split('.').length >1) return 'tag.class'
   return 'tag';
  // return selector[0] === '.' ? 'class' :
  //   selector[0] === '#' ? 'div' :
  //   selector.includes('.') ? 'tag.class' :
  //   'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (el) {
      return '#' + el.id === selector
   }
  } else if (selectorType === "class") {
    matchFunction =function (el) {
      for (let i = 0; i < el,classList.length; i++) {
        if('.' + el.id === selector)return true        
      }
      return false
    }

  } else if (selectorType === "tag.class") {
    
  } else if (selectorType === "tag") {
    matchFunction=function (el) {
      
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


