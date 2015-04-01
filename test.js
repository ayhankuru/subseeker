var subseeker =require('./index.js');
var expect = require('expect.js');

	describe('Search Test!!!...', function(){
		
		it('Test :1', function (done) {
		
		subseeker('0434409').then(function(data){
				expect(data).to.be.an('object');
				expect(data.total_releases).to.eql(511);
				expect(data.title).to.eql("V for Vendetta");
				expect(data.year).to.eql("2005");
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
		});

		it('Test :2', function (done) {
		
		subseeker('1826940').then(function(data){
			
				expect(data).to.be.an('object');
				expect(data.title).to.eql("New Girl");
				expect(data.year).to.eql("2011");
				expect(data.html_url).to.eql("http://www.subtitleseeker.com/1826940/New+Girl/Tv-Subtitles/");
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
		});

	});

	
