var subseeker =require('./index.js');
var expect = require('expect.js');

	describe('Search Test!!!...', function(){
		it('Test :1 ', function(done){

			subseeker('0434409',function(err,data){
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data.total_releases).to.eql(464);
				expect(data.title).to.eql("V for Vendetta");
				expect(data.year).to.eql("2005");
				expect(data.items[1].latest_addition_unix).to.eql("1391667314");
				done();
			});

		});

		it('Test :2 ', function(done){

			subseeker('1826940',function(err,data){
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data.title).to.eql("New Girl");
				expect(data.year).to.eql("2011");
				expect(data.html_url).to.eql("http://www.subtitleseeker.com/1826940/New+Girl/Tv-Subtitles/");
				done();
			});

		});

	});

	