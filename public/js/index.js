/*jshint node:true*/
/*global XMLHttpRequest,ActiveXObject,document,alert,confirm*/
function createXHR() {
	if (typeof XMLHttpRequest !== 'undefined') {
		return new XMLHttpRequest();
	} else {
		try {
			return new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				return new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
			}
		}
	}
	return null;
}

function setValue(value) {
	var stringValue = value.toString();
	var xhr = createXHR();
	xhr.open("PUT", "cache?key=counter&value=" + stringValue, false);
	xhr.send(null);
	var thediv = document.getElementById("count");
	thediv.innerHTML = "<p class='counterStyle'>" + stringValue + "</p>";
}

function getValue() {
	var xhr = createXHR();
	xhr.open("GET", "cache/counter", false);
	xhr.send(null);
	var result = JSON.parse(xhr.responseText);
	var value = result.value;
	return value;
}

function yes() {
	setValue(parseInt(getValue(),10) + 1);
}
function no() {
	setValue(parseInt(getValue(),10) - 1);
}
function resetCounter() {
	if (confirm("Are you sure")) {
		setValue("0");
	}
}
function updateCurrent() {
	setValue(getValue());
}