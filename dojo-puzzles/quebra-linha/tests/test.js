function breakLine(message, columns){
	var result = [];
	var msg_split = message.split(' ');
	var line = null;
	
	for (var i = 0; i < msg_split.length; i++) {
		var msg = msg_split[i];
		if(line === null){
			line = msg;
		} else if((msg.length + 1 + line.length) > columns) {
			result.push(line);
			line = msg;
		} else {
			line = line + ' ' + msg;
		}		
	}
	if(line !== null) {
		result.push(line);
	}
		
	return result;
}

QUnit.test('Deve retornar um array com 1 uma string', function(assert) {
	var msg = 'teste';
	var expected = [msg];
	var col = 20;
	assert.deepEqual(breakLine(msg, col), expected);
});

QUnit.test('Deve retornar um array com 2 strings com 7 colunas', function(assert) {
	var msg = 'Marcos Dioni';
	var expected = ['Marcos', 'Dioni'];
	var col = 7;
	assert.deepEqual(breakLine(msg, col), expected);
});

QUnit.test('Deve retornar um array com 1 string maior que a coluna', function(assert) {
	var msg = 'MarcosDioniLima';
	var expected = [msg];
	var col = 7;
	assert.deepEqual(breakLine(msg, col), expected);
});

QUnit.test('Deve retornar um array com a frase do desafio', function(assert) {
	var msg = 'Um pequeno jabuti xereta viu dez cegonhas felizes.';
	var expected = ['Um pequeno jabuti', 'xereta viu dez', 'cegonhas felizes.'];
	var col = 20;
	assert.deepEqual(breakLine(msg, col), expected);
});
