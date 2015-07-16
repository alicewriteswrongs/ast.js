// produces a tree that d3 will enjoy!
//
// switch(node.type) {
// case ('Program'):
//  blah;
//  break;
// etc

function getChildren (node) {
    switch (node.type)
    {
        case 'Program':
            return {
                name: node['type'],
                children: node['body'],
                data: {}
            };
            break;
        case 'VariableDeclaration':
            return {
                name: node['type'],
                children: node['declarations'],
                data: {
                    kind: node['kind']
                }
            };
            break;
        case 'IfStatement':
            return {
                name: node['type'],
                children: [
                    node['test'],
                    node['consequent'],
                    node['alternate']
                ],
                data: {}
            };
            break;
        case 'VariableDeclarator':
            return {
                name: node['type'],
                children: [
                    node['id'],
                    node['init']
                ],
                data:  {}
            };
            break;
        case 'Function':
            return {
                name: node['type'],
                children: [
                    node['params'],
                    node['body'],
                ],
                data:  {id: node['id']}
            };
            break;
        case 'BlockStatement':
            return {
                name: node['type'],
                children: node['body'],
                data: {}
            };
            break;
        case 'ExpressionStatement':
            return {
                name: node['type'],
                children: node['expression'],
                data: {}
            };
            break;
        case 'LabeledStatement':
            return {
                name: node['type'],
                children: node['body'],
                data: {label: node['label']}
            };
            break;
        case 'BreakStatement':
            return {
                name: node['type'],
                children: undefined,
                data:  {label: node['label']}
            };
            break;
        case 'ContinueStatement':
            return {
                name: node['type'],
                children: undefined,
                data:  {label: node['label']}
            };
            break;
        case 'WithStatement':
            return {
                name: node['type'],
                children: [
                    node['object'],
                    node['body']
                ],
                data:  {}
            };
            break;
        case 'SwitchStatement':
            return {
                name: node['type'],
                children: [
                    node['disciminant'],
                    node['cases']
                ],
                data:  {}
            };
            break;
        case 'ReturnStatement':
            return {
                name: node['type'],
                children: node['argument'],
                data:  {}
            };
            break;
        case 'ThrowStatement':
            return {
                name: node['type'],
                children: node['argument'],
                data:  {}
            };
            break;
        case 'TryStatement':
            return {
                name: node['type'],
                children: [
                    node['block'],
                    node['handler'],
                    node['finalizer']
                ],
                data:  {}
            };
            break;
        case 'WhileStatement':
            return {
                name: node['type'],
                children: [
                    node['test'],
                    node['body']
                ],
                data:  {}
            };
            break;
        case 'DoWhileStatement':
            return {
                name: node['type'],
                children: [
                    node['body'],
                    node['test']
                ],
                data:  {}
            };
            break;
        case 'ForStatement':
            return {
                name: node['type'],
                children: [
                    node['init'],
                    node['test'],
                    node['update'],
                    node['body']
                ],
                data:  {}
            };
            break;
        case 'ForInStatement':
            return {
                name: node['type'],
                children: [
                    node['left'],
                    node['right'],
                    node['body']
                ],
                data:  {}
            };
            break;
        case 'DebuggerStatement':
            return {
                name: node['type'],
                children: undefined,
                data:  {}
            };
            break;
        case 'FunctionDeclaration':
            return {
                name: node['type'],
                children: undefined,
                data:  {id: node['id']}
            };
            break;
        case 'ThisExpression':
            return {
                name: node['type'],
                children: undefined,
                data: {}
            };
            break;
        case 'ArrayExpression':
            return {
                name: node['type'],
                children: node['elements'],
                data: {}
            };
            break;
        case 'ObjectExpression':
            return {
                name: node['type'],
                children: node['properties'],
                data:  {}
            };
            break;
        case 'Property':
            return {
                name: node['type'],
                children: node['value'],
                data:  {
                    key: node['key'],
                    kind: node['kind']
                }
            };
            break;
        case 'FunctionExpression':
            return {
                name: node['type'],
                children: undefined,
                data:  {}
            };
            break;
        case 'SequenceExpression':
            return {
                name: node['type'],
                children: node['expressions'],
                data:  {}
            };
            break;
        case 'UnaryExpression':
            return {
                name: node['type'],
                children: [
                    node['operator'],
                    node['prefix'],
                    node['argument']
                ],
                data:  {}
            };
            break;
        case 'BinaryExpression':
            return {
                name: node['type'],
                children: [
                    node['operator'],
                    node['left'],
                    node['right']
                ],
                data:  {}
            };
            break;
        case 'AssignmentExpression':
            return {
                name: node['type'],
                children: [
                    node['operator'],
                    node['left'],
                    node['right']
                ],
                data:  {}
            };
            break;
        case 'UpdateExpression':
            return {
                name: node['type'],
                children: [
                    node['operator'],
                    node['argument'],
                    node['prefix']
                ],
                data:  {}
            };
            break;
        case 'LogicalExpression':
            return {
                name: node['type'],
                children: [
                    node['operator'],
                    node['left'],
                    node['right']
                ],
                data:  {}
            };
            break;
        case 'ConditionalExpression':
            return {
                name: node['type'],
                children: [
                    node['test'],
                    node['alternate'],
                    node['consequent']
                ],
                data:  {}
            };
            break;
        case 'CallExpression':
            return {
                name: node['type'],
                children: [
                    node['callee'],
                    node['arguments']
                ],
                data:  {}
            };
            break;
        case 'NewExpression':
            return {
                name: node['type'],
                children: undefined,
                data:  {}
            };
            break;
        case 'MemberExpression':
            return {
                name: node['type'],
                children: [
                    node['object'],
                    node['property'],
                    node['computed']
                ],
                data:  {}
            };
            break;
        case 'SwitchCase':
            return {
                name: node['type'],
                children: [
                    node['test'],
                    node['consequent']
                ],
                data:  {}
            };
            break;
        case 'CatchClause':
            return {
                name: node['type'],
                children: [
                    node['param'],
                    node['body']
                ],
                data:  {}
            };
            break;
        case 'Identifier':
            return {
                name: node['type'],
                children: undefined,
                data:  {name: node['name']}
            };
            break;
        case 'Literal':
            return {
                name: node['type'],
                children: undefined,
                data:  {value: node['value']}
            };
            break;
        case 'RegExpLiteral':
            return {
                name: node['type'],
                children: undefined,
                data:  {regex: node['regex']}
            };
            break;
        case 'UnaryOperator':
            return {
                name: node['type'],
                children: undefined,
                data: {operator: node[0]}
            };
            break;
        case 'LogicalOperator':
            return {
                name: node['type'],
                children: undefined,
                data: {operator: node[0]}
            };
            break;
        case 'AssignmentOperator':
            return {
                name: node['type'],
                children: undefined,
                data: {operator: node[0]}
            };
            break;
        case 'UpdateOperator':
            return {
                name: node['type'],
                children: undefined,
                data: {operator: node[0]}
            };
            break;
    }
}

function makeNode(object) {
    // get the children
    var nodeChildren = getChildren(object);
    // apply makeNode to all the children
    insChildren = [];
    for (var i = 0; i < nodeChildren.length; i++) {
        insChildren.push(makeNode(nodeChildren[i]));
    }
    return {
        name: getName(object),
        children: insChildren
    }
};
