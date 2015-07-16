// produces a tree that d3 will enjoy!

function getName (node) {
    return node.type;
}

// declarations are handled differently than some
// other kinds of things?

function getChildren (object) {
    var children = [];
    function collectChildren (object) {
        for (blah in object) {
            if (object.hasOwnProperty(blah)) {
                if ((typeof object[blah]) === 'object') {
                    children.push(object[blah]);
    }}}} // is this bad?
    if (object.type === 'Program') {
        children = object['body'];
    } else if (object.type === 'VariableDeclaration') {
        children = object['declarations'];
    } else if (object.type === 'IfStatement') {
        children['test'] = object['test'];
        children['consequent'] = object['consequent'];
        children['alternate'] = object['alternate'];
    } else if (object.hasOwnProperty(blah)) {
        if ((typeof object[blah]) === 'object') {
            children.push(object[blah]);
        }
    }
    return children;
}

// pseudocode, but how I want this to work
function makeNode(object) {
    // get the children
    var nodeChildren = getChildren(object);
    // apply makeNode to all the children
    children = nodeChildren.forEach(makeNode);
    return {
        name: getName(object),
        children: getChildren(object)
    }
};

