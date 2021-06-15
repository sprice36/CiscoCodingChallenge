import moment from "moment";

const formatYMD = 'YYYY-MM-DD';

export function getPrevDate(){
	return moment().subtract(1, "day").format(formatYMD);
}
