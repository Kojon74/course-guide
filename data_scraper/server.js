const axios = require('axios')
const cheerio = require('cheerio');

const getCourseData = async (specialization="CPEN", year='all') => {
	try {
		const { data } = await axios.get(
            `https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-department&dept=${specialization}`
		);

		const $ = cheerio.load(data);
		const res = [];

		$('tr').each((_idx, el) => { 
            const data = el.childNodes;
            const courseTitle = $(data[0]).text();
            const courseDisc = $(data[1]).text();
            
            if(!courseTitle.includes(specialization)){
                return;
            }
            if(year !== 'all' && courseTitle[specialization.length + 1] !== year.toString()[0]){
                return;
            }
			res.push(`${courseTitle}, ${courseDisc}`);
		});

		return res;
	} 
    catch (error) {
		throw error;
	}
};

getCourseData("ELEC", "all").then((res)=>console.log(res))
getCourseData("ELEC", 2).then((res)=>console.log(res))


