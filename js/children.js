// custom function to help d3 know about children

function getchildren (d) {
    if (d.type === 'VariableDeclaration') {
        return d.declarations;
    } else if (d.type === 'IfStatement') {
        return [d.test, d.consequent, d.alternate]
    }
}

