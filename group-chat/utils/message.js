var moment = require('moment');

var generateMessage = (from, avatar, text) => {
	return {
		from,
		avatar,
		text,
		createdAt: moment.valueOf()
	};
};

var generateLocationMessage = (from, lat, long) => {
  return {
    from,
    url: `https://google.com/maps?q=${lat},${long}`,
    createdAt: moment.valueOf()
  };
};

module.exports = {
	generateMessage,
	generateLocationMessage
};