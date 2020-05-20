function getSeconds(str) {
  // original regex is ^\d{1,2}:[0-5]\d(\.\d+)?$
  
  var a = str.split(':'); // split it at the colon
  
  var seconds = parseFloat(a[1]);
  var minutes = parseInt(a[0]);
  seconds += minutes * 60
  return seconds;
}

/**
 * Provides a USAF PT Test Score
 *
 * @param {gender} input The string "Male" or "Female".
 * @param {age} input Age, an integer.
 * @param {height} input height, an integer in inches.
 * @param {weight} input weight, an integer in pounds.
 * @param {abd} input Abdominal circumference measurement, in decimal inches.
 * @param {push} input Push-ups, an integer.
 * @param {sit} input Sit-ups, an integer.
 * @param {run_time} input The duration of the 1.5-mile run (or walk), in the format 12:59.99.
 * @param {is_walk} input Whether the run or walk test was performed, the string "TRUE" or "FALSE"
 * @return The PT test score, as a decimal from 0 to 100
 * @customfunction
 */
function ptscore(gender,age,height,weight,abd,push,sit,run_time,is_walk){
		age = parseInt(age);
		height = parseInt(height);
		weight = parseInt(weight);
		abd = parseFloat(abd);
		push = parseInt(push);
		sit = parseInt(sit);
        if ( is_walk=="TRUE" ) {
          var walk_time = getSeconds(run_time);
          run_time = 0;
        } else {
          run_time = getSeconds(run_time);
          var walk_time=0;
        }  
		
		var total_score = 0;
		var rating;
		var bmi = (weight/(height*height))*703;
		var current_score = 0;	
		
		current_score = total_score 		

		// Determine gender
		if (gender=="Male") {
			
			
			// Determine age
			if (age<30) {
				
				// Run Time Score
				if (run_time<=552) {
					total_score += 60;
				} else if (run_time>552 && run_time<=574) {
					total_score += 59.7;
				} else if (run_time>574 && run_time<=585) {
					total_score += 59.3;
				} else if (run_time>585 && run_time<=598) {
					total_score += 58.9;
				} else if (run_time>598 && run_time<=610) {
					total_score += 58.5;
				} else if (run_time>610 && run_time<=623) {
					total_score += 57.9;
				} else if (run_time>623 && run_time<=637) {
					total_score += 57.3;
				} else if (run_time>637 && run_time<=651) {
					total_score += 56.6;
				} else if (run_time>651 && run_time<=666) {
					total_score += 55.7;
				} else if (run_time>666 && run_time<=682) {
					total_score += 54.8;
				} else if (run_time>682 && run_time<=698) {
					total_score += 53.7;
				} else if (run_time>698 && run_time<=716) {
					total_score += 52.4;
				} else if (run_time>716 && run_time<=734) {
					total_score += 50.9;
				} else if (run_time>734 && run_time<=753) {
					total_score += 49.2;
				} else if (run_time>753 && run_time<=773) {
					total_score += 47.2;
				} else if (run_time>773 && run_time<=794) {
					total_score += 44.9;
				} else if (run_time>794 && run_time<=816) {
					total_score += 42.3;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				

				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=976) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=67) {
					total_score += 10;
				} else if (push<67 && push>61) {
					total_score += 9.5;
				} else if (push==61) {
					total_score += 9.4;
				} else if (push==60) {
					total_score += 9.3;
				} else if (push==59) {
					total_score += 9.2;
				} else if (push==58) {
					total_score += 9.1;
				} else if (push==57) {
					total_score += 9;
				} else if (push==56) {
					total_score += 8.9;
				} else if (push==55 || push==54) {
					total_score += 8.8;
				} else if (push==53) {
					total_score += 8.7;
				} else if (push==52) {
					total_score += 8.6; 
				} else if (push==51) {
					total_score += 8.5;
				} else if (push==50) {
					total_score += 8.4;
				} else if (push==49) {
					total_score += 8.3;
				} else if (push==48) {
					total_score += 8.1;
				} else if (push==47) {
					total_score += 8;
				} else if (push==46) {
					total_score += 7.8;
				} else if (push==45) {
					total_score += 7.7;
				} else if (push==44) {
					total_score += 7.5;
				} else if (push==43) {
					total_score += 7.3;
				} else if (push==42) {
					total_score += 7.2;
				} else if (push==41) {
					total_score += 7;
				} else if (push==40) {
					total_score += 6.8;
				} else if (push==39) {
					total_score += 6.5;
				} else if (push==38) {
					total_score += 6.3;
				} else if (push==37) {
					total_score += 6;
				} else if (push==36) {
					total_score += 5.8;
				} else if (push==35) {
					total_score += 5.5;
				} else if (push==34) {
					total_score += 5.3;
				} else if (push==33) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=58) {
					total_score += 10;
				} else if (sit<58 && sit>54) {
					total_score += 9.5;
				} else if (sit==54) {
					total_score += 9.4;
				} else if (sit==53) {
					total_score += 9.2;
				} else if (sit==52) {
					total_score += 9;
				} else if (sit==51) {
					total_score += 8.8;
				} else if (sit==50) {
					total_score += 8.7;
				} else if (sit==49) {
					total_score += 8.5;
				} else if (sit==48) {
					total_score += 8.3;
				} else if (sit==47) {
					total_score += 8;
				} else if (sit==46) {
					total_score += 7.5;
				} else if (sit==45) {
					total_score += 7;
				} else if (sit==44) {
					total_score += 6.5;
				} else if (sit==43) {
					total_score += 6.3;
				} else if (sit==42) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
								
				
			} else if (age>29 && age<=39) {
				
				// Run Time Score
				if (run_time<=574) {
					total_score += 60;
				} else if (run_time>574 && run_time<=598) {
					total_score += 59.3;
				} else if (run_time>598 && run_time<=610) {
					total_score += 58.6;
				} else if (run_time>610 && run_time<=623) {
					total_score += 57.9;
				} else if (run_time>623 && run_time<=637) {
					total_score += 57.3;
				} else if (run_time>637 && run_time<=651) {
					total_score += 56.6;
				} else if (run_time>651 && run_time<=666) {
					total_score += 55.7;
				} else if (run_time>666 && run_time<=682) {
					total_score += 54.8;
				} else if (run_time>682 && run_time<=698) {
					total_score += 53.7;
				} else if (run_time>698 && run_time<=716) {
					total_score += 52.4;
				} else if (run_time>716 && run_time<=734) {
					total_score += 50.9;
				} else if (run_time>734 && run_time<=753) {
					total_score += 49.2;
				} else if (run_time>753 && run_time<=773) {
					total_score += 47.2;
				} else if (run_time>773 && run_time<=794) {
					total_score += 44.9;
				} else if (run_time>794 && run_time<=816) {
					total_score += 42.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 39.3;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=978) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=57) {
					total_score += 10;
				} else if (push<57 && push>51) {
					total_score += 9.5;
				} else if (push==51) {
					total_score += 9.4;
				} else if (push==50) {
					total_score += 9.3;
				} else if (push==49) {
					total_score += 9.2;
				} else if (push==48) {
					total_score += 9.2;
				} else if (push==47) {
					total_score += 9.1;
				} else if (push==46) {
					total_score += 9;
				} else if (push==45) {
					total_score += 8.9;
				} else if (push==44) {
					total_score += 8.8;
				} else if (push==43) {
					total_score += 8.7; 
				} else if (push==42) {
					total_score += 8.6;
				} else if (push==41) {
					total_score += 8.5;
				} else if (push==40) {
					total_score += 8.3;
				} else if (push==39) {
					total_score += 8;
				} else if (push==38) {
					total_score += 7.8;
				} else if (push==37) {
					total_score += 7.7;
				} else if (push==36) {
					total_score += 7.5;
				} else if (push==35) {
					total_score += 7.3;
				} else if (push==34) {
					total_score += 7;
				} else if (push==33) {
					total_score += 6.8;
				} else if (push==32) {
					total_score += 6.7;
				} else if (push==31) {
					total_score += 6.5;
				} else if (push==30) {
					total_score += 6;
				} else if (push==29) {
					total_score += 5.5;
				} else if (push==28) {
					total_score += 5.3;
				} else if (push==27) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				

				current_score = total_score;
				// Sit Ups Score
				if (sit>=54) {
					total_score += 10;
				} else if (sit<54 && sit>50) {
					total_score += 9.5;
				} else if (sit==50) {
					total_score += 9.4;
				} else if (sit==49) {
					total_score += 9.2;
				} else if (sit==48) {
					total_score += 9;
				} else if (sit==47) {
					total_score += 8.8;
				} else if (sit==46) {
					total_score += 8.7;
				} else if (sit==45) {
					total_score += 8.5;
				} else if (sit==44) {
					total_score += 8.3;
				} else if (sit==43) {
					total_score += 8;
				} else if (sit==42) {
					total_score += 7.5;
				} else if (sit==41) {
					total_score += 7;
				} else if (sit==40) {
					total_score += 6.5;
				} else if (sit==39) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
			} else if (age>39 && age<=49) {
				
				
				// Run Time Score
				if (run_time<=585) {
					total_score += 60;
				} else if (run_time>585 && run_time<=610) {
					total_score += 59.8;
				} else if (run_time>610 && run_time<=623) {
					total_score += 59.5;
				} else if (run_time>623 && run_time<=637) {
					total_score += 59.1;
				} else if (run_time>637 && run_time<=651) {
					total_score += 58.7;
				} else if (run_time>651 && run_time<=666) {
					total_score += 58.3;
				} else if (run_time>666 && run_time<=682) {
					total_score += 57.7;
				} else if (run_time>682 && run_time<=698) {
					total_score += 57.1;
				} else if (run_time>698 && run_time<=716) {
					total_score += 56.3;
				} else if (run_time>716 && run_time<=734) {
					total_score += 55.4;
				} else if (run_time>734 && run_time<=753) {
					total_score += 54.3;
				} else if (run_time>753 && run_time<=773) {
					total_score += 53.1;
				} else if (run_time>773 && run_time<=794) {
					total_score += 51.5;
				} else if (run_time>794 && run_time<=816) {
					total_score += 49.8;
				} else if (run_time>816 && run_time<=840) {
					total_score += 47.7;
				} else if (run_time>840 && run_time<=865) {
					total_score += 45.2;
				} else if (run_time>865 && run_time<=892) {
					total_score += 42.3;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=983) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=44) {
					total_score += 10;
				} else if (push<44 && push>39) {
					total_score += 9.5;
				} else if (push==39) {
					total_score += 9.4;
				} else if (push==38) {
					total_score += 9.2;
				} else if (push==37) {
					total_score += 9.1;
				} else if (push==36) {
					total_score += 9;
				} else if (push==35) {
					total_score += 8.8;
				} else if (push==34) {
					total_score += 8.5;
				} else if (push==33) {
					total_score += 8.4;
				} else if (push==32) {
					total_score += 8.3;
				} else if (push==31) {
					total_score += 8.1; 
				} else if (push==30) {
					total_score += 8;
				} else if (push==29) {
					total_score += 7.5;
				} else if (push==28) {
					total_score += 7.3;
				} else if (push==27) {
					total_score += 7.2;
				} else if (push==26) {
					total_score += 7;
				} else if (push==25) {
					total_score += 6.5;
				} else if (push==24) {
					total_score += 6;
				} else if (push==23) {
					total_score += 5.8;
				} else if (push==22) {
					total_score += 5.5;
				} else if (push==21) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=50) {
					total_score += 10;
				} else if (sit<50 && sit>46) {
					total_score += 9.5;
				} else if (sit==46) {
					total_score += 9.4;
				} else if (sit==45) {
					total_score += 9.2;
				} else if (sit==44) {
					total_score += 9.1;
				} else if (sit==43) {
					total_score += 9;
				} else if (sit==42) {
					total_score += 8.8;
				} else if (sit==41) {
					total_score += 8.7;
				} else if (sit==40) {
					total_score += 8.5;
				} else if (sit==39) {
					total_score += 8;
				} else if (sit==38) {
					total_score += 7.8;
				} else if (sit==37) {
					total_score += 7.5;
				} else if (sit==36) {
					total_score += 7;
				} else if (sit==35) {
					total_score += 6.5;
				} else if (sit==34) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
			} else if (age>49 && age<=59) {
				
				
				// Run Time Score
				if (run_time<=637) {
					total_score += 60;
				} else if (run_time>637 && run_time<=666) {
					total_score += 59.7;
				} else if (run_time>666 && run_time<=682) {
					total_score += 59.4;
				} else if (run_time>682 && run_time<=698) {
					total_score += 59;
				} else if (run_time>698 && run_time<=716) {
					total_score += 58.5;
				} else if (run_time>716 && run_time<=734) {
					total_score += 58;
				} else if (run_time>734 && run_time<=753) {
					total_score += 57.3;
				} else if (run_time>753 && run_time<=773) {
					total_score += 56.5;
				} else if (run_time>773 && run_time<=794) {
					total_score += 55.6;
				} else if (run_time>794 && run_time<=816) {
					total_score += 54.5;
				} else if (run_time>816 && run_time<=840) {
					total_score += 53.3;
				} else if (run_time>840 && run_time<=865) {
					total_score += 51.8;
				} else if (run_time>865 && run_time<=892) {
					total_score += 50;
				} else if (run_time>892 && run_time<=920) {
					total_score += 47.9;
				} else if (run_time>920 && run_time<=950) {
					total_score += 45.4;
				} else if (run_time>950 && run_time<=982) {
					total_score += 42.4;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1000) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=44) {
					total_score += 10;
				} else if (push<44 && push>=39) {
					total_score += 9.5;
				} else if (push==38) {
					total_score += 9.4;
				} else if (push==37) {
					total_score += 9.4;
				} else if (push==36) {
					total_score += 9.3;
				} else if (push==35) {
					total_score += 9.3;
				} else if (push==34) {
					total_score += 9.2;
				} else if (push==33) {
					total_score += 9.2;
				} else if (push==32) {
					total_score += 9.1;
				} else if (push==31) {
					total_score += 9.1;
				} else if (push==30) {
					total_score += 9; 
				} else if (push==29) {
					total_score += 8.8;
				} else if (push==28) {
					total_score += 8.5;
				} else if (push==27) {
					total_score += 8.3;
				} else if (push==26) {
					total_score += 8.2;
				} else if (push==25) {
					total_score += 8;
				} else if (push==24) {
					total_score += 7.5;
				} else if (push==23) {
					total_score += 7.3;
				} else if (push==22) {
					total_score += 7.2;
				} else if (push==21) {
					total_score += 7;
				} else if (push==20) {
					total_score += 6.5;
				} else if (push==19) {
					total_score += 6;
				} else if (push==18) {
					total_score += 5.8;
				} else if (push==17) {
					total_score += 5.5;
				} else if (push==16) {
					total_score += 5.3;
				} else if (push==15) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=46) {
					total_score += 10;
				} else if (sit<46 && sit>42) {
					total_score += 9.5;
				} else if (sit==42) {
					total_score += 9.4;
				} else if (sit==41) {
					total_score += 9.2;
				} else if (sit==40) {
					total_score += 9.1;
				} else if (sit==39) {
					total_score += 9;
				} else if (sit==38) {
					total_score += 8.8;
				} else if (sit==37) {
					total_score += 8.7;
				} else if (sit==36) {
					total_score += 8.5;
				} else if (sit==35) {
					total_score += 8;
				} else if (sit==34) {
					total_score += 7.8;
				} else if (sit==33) {
					total_score += 7.5;
				} else if (sit==32) {
					total_score += 7.3;
				} else if (sit==31) {
					total_score += 7;
				} else if (sit==30) {
					total_score += 6.5;
				} else if (sit=29) {
					total_score += 6.3;
				} else if (sit=28) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
				
			} else if (age>59) {
				
				
				// Run Time Score
				if (run_time<=682) {
					total_score += 60;
				} else if (run_time>682 && run_time<=716) {
					total_score += 59.7;
				} else if (run_time>716 && run_time<=734) {
					total_score += 59.4;
				} else if (run_time>734 && run_time<=753) {
					total_score += 59;
				} else if (run_time>753 && run_time<=773) {
					total_score += 58.5;
				} else if (run_time>773 && run_time<=794) {
					total_score += 58;
				} else if (run_time>794 && run_time<=816) {
					total_score += 57.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 56.5;
				} else if (run_time>840 && run_time<=865) {
					total_score += 55.6;
				} else if (run_time>865 && run_time<=892) {
					total_score += 54.5;
				} else if (run_time>892 && run_time<=920) {
					total_score += 53.3;
				} else if (run_time>920 && run_time<=950) {
					total_score += 51.8;
				} else if (run_time>950 && run_time<=982) {
					total_score += 50;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 47.9;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 45.4;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 42.4;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1018) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=30) {
					total_score += 10;
				} else if (push<30 && push>28) {
					total_score += 9.5;
				} else if (push==27) {
					total_score += 9.3;
				} else if (push==26) {
					total_score += 9;
				} else if (push==25) {
					total_score += 8.8;
				} else if (push==24) {
					total_score += 8.5;
				} else if (push==23) {
					total_score += 8;
				} else if (push==22) {
					total_score += 7.5;
				} else if (push==21) {
					total_score += 7;
				} else if (push==20) {
					total_score += 6.5;
				} else if (push==19) {
					total_score += 6.3;
				} else if (push==18) {
					total_score += 6;
				} else if (push==17) {
					total_score += 5.8;
				} else if (push==16) {
					total_score += 5.5;
				} else if (push==15) {
					total_score += 5.3;
				} else if (push==14) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=42) {
					total_score += 10;
				} else if (sit<42 && sit>38) {
					total_score += 9.5;
				} else if (sit==38) {
					total_score += 9.4;
				} else if (sit==37) {
					total_score += 9.2;
				} else if (sit==36) {
					total_score += 9.1;
				} else if (sit==35) {
					total_score += 9;
				} else if (sit==34) {
					total_score += 8.9;
				} else if (sit==33) {
					total_score += 8.8;
				} else if (sit==32) {
					total_score += 8.6;
				} else if (sit==31) {
					total_score += 8.5;
				} else if (sit==30) {
					total_score += 8;
				} else if (sit==29) {
					total_score += 7.8;
				} else if (sit==28) {
					total_score += 7.5;
				} else if (sit==27) {
					total_score += 7.3;
				} else if (sit==26) {
					total_score += 7;
				} else if (sit==25) {
					total_score += 6.8;
				} else if (sit==24) {
					total_score += 6.5;
				} else if (sit==23) {
					total_score += 6.3;
				} else if (sit==22) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
			}
			
			current_score = total_score;
			// Abdominal Circumference Score
			
			if (abd<=35) {
				total_score += 20;
			} else if (abd==35.5) {
				total_score += 17.6;
			} else if (abd==36) {
				total_score += 17;
			} else if (abd==36.5) {
				total_score += 16.4;
			} else if (abd==37) {
				total_score += 15.8;
			} else if (abd==37.5) {
				total_score += 15.1;
			} else if (abd==38) {
				total_score += 14.4;
			} else if (abd==38.5) {
				total_score += 13.5;
			} else if (abd==39) {
				total_score += 12.6;
			} else {
				total_score += 0;
				rating = "Unsatisfactory";
			}
			
			
			
		} else {
			// Female calculations
			
			// Determine age
			if (age<30) {
				
				// Run Time Score
				if (run_time<=623) {
					total_score += 60;
				} else if (run_time>623 && run_time<=651) {
					total_score += 59.9;
				} else if (run_time>651 && run_time<=666) {
					total_score += 59.5;
				} else if (run_time>666 && run_time<=682) {
					total_score += 59.2;
				} else if (run_time>682 && run_time<=698) {
					total_score += 58.9;
				} else if (run_time>698 && run_time<=716) {
					total_score += 58.6;
				} else if (run_time>716 && run_time<=734) {
					total_score += 58.1;
				} else if (run_time>734 && run_time<=754) {
					total_score += 57.6;
				} else if (run_time>754 && run_time<=773) {
					total_score += 57;
				} else if (run_time>773 && run_time<=794) {
					total_score += 56.2;
				} else if (run_time>794 && run_time<=816) {
					total_score += 55.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 54.2;
				} else if (run_time>840 && run_time<=865) {
					total_score += 52.8;
				} else if (run_time>865 && run_time<=892) {
					total_score += 51.2;
				} else if (run_time>892 && run_time<=920) {
					total_score += 49.3;
				} else if (run_time>920 && run_time<=950) {
					total_score += 46.9;
				} else if (run_time>950 && run_time<=982) {
					total_score += 44.1;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1042) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=47) {
					total_score += 10;
				} else if (push>=42 && push<47) {
					total_score += 9.5;
				} else if (push==41) {
					total_score += 9.4;
				} else if (push==40) {
					total_score += 9.3;
				} else if (push==39) {
					total_score += 9.2;
				} else if (push==38) {
					total_score += 9.1;
				} else if (push==37) {
					total_score += 9;
				} else if (push==36) {
					total_score += 8.9;
				} else if (push==35) {
					total_score += 8.8;
				} else if (push==34) {
					total_score += 8.6;
				} else if (push==33) {
					total_score += 8.5;
				} else if (push==32) {
					total_score += 8.4;
				} else if (push==31) {
					total_score += 8.3;
				} else if (push==30) {
					total_score += 8.2;
				} else if (push==29) {
					total_score += 8.1;
				} else if (push==28) {
					total_score += 8;
				} else if (push==27) {
					total_score += 7.5;
				} else if (push==26) {
					total_score += 7.3;
				} else if (push==25) {
					total_score += 7.2;
				} else if (push==24) {
					total_score += 7;
				} else if (push==23) {
					total_score += 6.5;
				} else if (push==22) {
					total_score += 6.3;
				} else if (push==21) {
					total_score += 6;
				} else if (push==20) {
					total_score += 5.8;
				} else if (push==19) {
					total_score += 5.5;
				} else if (push==18) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=54) {
					total_score += 10;
				} else if (sit<54 && sit>50) {
					total_score += 9.5;
				} else if (sit==50) {
					total_score += 9.4;
				} else if (sit==49) {
					total_score += 9;
				} else if (sit==48) {
					total_score += 8.9;
				} else if (sit==47) {
					total_score += 8.8;
				} else if (sit==46) {
					total_score += 8.6;
				} else if (sit==45) {
					total_score += 8.5;
				} else if (sit==44) {
					total_score += 8;
				} else if (sit==43) {
					total_score += 7.8;
				} else if (sit==42) {
					total_score += 7.5;
				} else if (sit==41) {
					total_score += 7;
				} else if (sit==40) {
					total_score += 6.8;
				} else if (sit==39) {
					total_score += 6.5;
				} else if (sit==38) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
			} else if (age>29 && age<=39) {
				// Females 30-39


				// Run Time Score
				if (run_time<=651) { // < 10:51
					total_score += 60;
				} else if (run_time>651 && run_time<=682) { // 10:52 - 11:22
					total_score += 59.5;
				} else if (run_time>682 && run_time<=698) { // 11:23 - 11:38
					total_score += 59;
				} else if (run_time>698 && run_time<=716) { // 11:39 - 11:56
					total_score += 58.6;
				} else if (run_time>716 && run_time<=734) { // 11:57 - 12:14
					total_score += 58.1;
				} else if (run_time>734 && run_time<=753) { // 12:15 - 12:33
					total_score += 57.6;
				} else if (run_time>753 && run_time<=773) { // 12:34 - 12:53
					total_score += 57;
				} else if (run_time>773 && run_time<=794) { // 12:54 - 13:14
					total_score += 56.2;
				} else if (run_time>794 && run_time<=816) { // 13:15 - 13:36
					total_score += 55.3;
				} else if (run_time>816 && run_time<=840) { // 13:37 - 14:00
					total_score += 54.2;
				} else if (run_time>840 && run_time<=865) { // 14:01 - 14:25
					total_score += 52.8;
				} else if (run_time>865 && run_time<=892) { // 14:26 - 14:52
					total_score += 51.2;
				} else if (run_time>892 && run_time<=920) { // 14:53 - 15:20
					total_score += 49.3;
				} else if (run_time>920 && run_time<=950) { // 15:21 - 15:50
					total_score += 46.9;
				} else if (run_time>950 && run_time<=982) { // 15:51 - 16:22
					total_score += 44.1;
				} else if (run_time>982 && run_time<=1017) { // 16:23 - 16:57
					total_score += 40.8;
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1048) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=46) {
					total_score += 10;
				} else if (push<46 && push>39) {
					total_score += 9.5;
				} else if (push==39) {
					total_score += 9.4;
				} else if (push==38) {
					total_score += 9.3;
				} else if (push==37) {
					total_score += 9.3;
				} else if (push==36) {
					total_score += 9.2;
				} else if (push==35) {
					total_score += 9.1;
				} else if (push==34) {
					total_score += 9.1;
				} else if (push==33) {
					total_score += 9;
				} else if (push==32) {
					total_score += 8.9;
				} else if (push==31) {
					total_score += 8.9;
				} else if (push==30) {
					total_score += 8.8;
				} else if (push==29) {
					total_score += 8.7;
				} else if (push==28) {
					total_score += 8.6;
				} else if (push==27) {
					total_score += 8.6;
				} else if (push==26) {
					total_score += 8.5;
				} else if (push==25) {
					total_score += 8.3;
				} else if (push==24) {
					total_score += 8.2;
				} else if (push==23) {
					total_score += 8;
				} else if (push==22) {
					total_score += 7.9;
				} else if (push==21) {
					total_score += 7.8;
				} else if (push==20) {
					total_score += 7.6;
				} else if (push==19) {
					total_score += 7.5;
				} else if (push==18) {
					total_score += 7;
				} else if (push==17) {
					total_score += 6.8;
				} else if (push==16) {
					total_score += 6.5;
				} else if (push==15) {
					total_score += 6;
				} else if (push==14) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=45) {
					total_score += 10;
				} else if (sit<45 && sit>41) {
					total_score += 9.5;
				} else if (sit==41) {
					total_score += 9.4;
				} else if (sit==40) {
					total_score += 9;
				} else if (sit==39) {
					total_score += 8.8;
				} else if (sit==38) {
					total_score += 8.5;
				} else if (sit==37) {
					total_score += 8.3;
				} else if (sit==36) {
					total_score += 8.2;
				} else if (sit==35) {
					total_score += 8;
				} else if (sit==34) {
					total_score += 7.8;
				} else if (sit==33) {
					total_score += 7.5;
				} else if (sit==32) {
					total_score += 7;
				} else if (sit==31) {
					total_score += 6.8;
				} else if (sit==30) {
					total_score += 6.5;
				} else if (sit==29) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
			} else if (age>39 && age<=49) {
				// Females 40-49

				// Run Time Score
				if (run_time<=682) {
					total_score += 60;
				} else if (run_time>682 && run_time<=716) {
					total_score += 59.9;
				} else if (run_time>716 && run_time<=734) {
					total_score += 59.8;
				} else if (run_time>734 && run_time<=753) {
					total_score += 59.6;
				} else if (run_time>753 && run_time<=773) {
					total_score += 59.4;
				} else if (run_time>773 && run_time<=794) {
					total_score += 59.1;
				} else if (run_time>794 && run_time<=816) {
					total_score += 58.7;
				} else if (run_time>816 && run_time<=840) {
					total_score += 58.2;
				} else if (run_time>840 && run_time<=865) {
					total_score += 57.7;
				} else if (run_time>865 && run_time<=892) {
					total_score += 56.9;
				} else if (run_time>892 && run_time<=920) {
					total_score += 56;
				} else if (run_time>920 && run_time<=950) {
					total_score += 54.8;
				} else if (run_time>950 && run_time<=982) {
					total_score += 53.3;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 51.4;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 49;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 45.9;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1069) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				

				current_score = total_score;
				// Push Ups Score
				if (push>=38) {
					total_score += 10;
				} else if (push<38 && push>32) {
					total_score += 9.5;
				} else if (push==32) {
					total_score += 9.4;
				} else if (push==31) {
					total_score += 9.2;
				} else if (push==30) {
					total_score += 9.1;
				} else if (push==29) {
					total_score += 9;
				} else if (push==28) {
					total_score += 8.9;
				} else if (push==27) {
					total_score += 8.8;
				} else if (push==26) {
					total_score += 8.7;
				} else if (push==25) {
					total_score += 8.6;
				} else if (push==24) {
					total_score += 8.6;
				} else if (push==23) {
					total_score += 8.5;
				} else if (push==22) {
					total_score += 8.4;
				} else if (push==21) {
					total_score += 8.3;
				} else if (push==20) {
					total_score += 8.2;
				} else if (push==19) {
					total_score += 8.1;
				} else if (push==18) {
					total_score += 8;
				} else if (push==17) {
					total_score += 7.8;
				} else if (push==16) {
					total_score += 7.5;
				} else if (push==15) {
					total_score += 7;
				} else if (push==14) {
					total_score += 6.5
				} else if (push==13) {
					total_score += 6;
				} else if (push==12) {
					total_score += 5.5;
				} else if (push==11) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=41) {
					total_score += 10;
				} else if (sit<41 && sit>37) {
					total_score += 9.5;
				} else if (sit==37) {
					total_score += 9.4;
				} else if (sit==36) {
					total_score += 9.2;
				} else if (sit==35) {
					total_score += 9.1;
				} else if (sit==34) {
					total_score += 9;
				} else if (sit==33) {
					total_score += 8.8;
				} else if (sit==32) {
					total_score += 8.5;
				} else if (sit==31) {
					total_score += 8.3;
				} else if (sit==30) {
					total_score += 8.2;
				} else if (sit==29) {
					total_score += 8;
				} else if (sit==28) {
					total_score += 7.5;
				} else if (sit==27) {
					total_score += 7;
				} else if (sit==26) {
					total_score += 6.8;
				} else if (sit==25) {
					total_score += 6.4;
				} else if (sit==24) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
			} else if (age>49 && age<=59) {
				
				// Run Time Score
				if (run_time<=773) {
					total_score += 60;
				} else if (run_time>773 && run_time<=816) {
					total_score += 59.8;
				} else if (run_time>816 && run_time<=840) {
					total_score += 59.6;
				} else if (run_time>840 && run_time<=865) {
					total_score += 59.3;
				} else if (run_time>865 && run_time<=892) {
					total_score += 58.9;
				} else if (run_time>892 && run_time<=920) {
					total_score += 58.4;
				} else if (run_time>920 && run_time<=950) {
					total_score += 57.7;
				} else if (run_time>950 && run_time<=982) {
					total_score += 56.8;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 55.6;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 54;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 51.9;
				} else if (run_time>1094 && run_time<=1136) {
					total_score += 49.2;
				} else if (run_time>1136 && run_time<=1183) {
					total_score += 45.5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1091) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=35) {
					total_score += 10;
				} else if (push<35 && push>29) {
					total_score += 9.5;
				} else if (push==29) {
					total_score += 9.4;
				} else if (push==28) {
					total_score += 9.3;
				} else if (push==27) {
					total_score += 9.2;
				} else if (push==26) {
					total_score += 9.1;
				} else if (push==25) {
					total_score += 9;
				} else if (push==24) {
					total_score += 8.8;
				} else if (push==23) {
					total_score += 8.7;
				} else if (push==22) {
					total_score += 8.6;
				} else if (push==21) {
					total_score += 8.6;
				} else if (push==20) {
					total_score += 8.5;
				} else if (push==19) {
					total_score += 8.4;
				} else if (push==18) {
					total_score += 8.3;
				} else if (push==17) {
					total_score += 8.2;
				} else if (push==16) {
					total_score += 8.1;
				} else if (push==15) {
					total_score += 8;
				} else if (push==14) {
					total_score += 7.5;
				} else if (push==13) {
					total_score += 7;
				} else if (push==12) {
					total_score += 6.5;
				} else if (push==11) {
					total_score += 6;
				} else if (push==10) {
					total_score += 5.5;
				} else if (push==9) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=32) {
					total_score += 10;
				} else if (sit==30 || sit==31) {
					total_score += 9.5;
				} else if (sit==29) {
					total_score += 9;
				} else if (sit==28) {
					total_score += 8.9;
				} else if (sit==27) {
					total_score += 8.8;
				} else if (sit==26) {
					total_score += 8.6;
				} else if (sit==25) {
					total_score += 8.5;
				} else if (sit==24) {
					total_score += 8;
				} else if (sit==23) {
					total_score += 7.5;
				} else if (sit==22) {
					total_score += 7;
				} else if (sit==21) {
					total_score += 6.5;
				} else if (sit==20) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				

				
			} else if (age>59) {
				
				// Run Time Score
				if (run_time<=840) {
					total_score += 60;
				} else if (run_time>840 && run_time<=892) {
					total_score += 59.8;
				} else if (run_time>892 && run_time<=920) {
					total_score += 59.5;
				} else if (run_time>920 && run_time<=950) {
					total_score += 59.1;
				} else if (run_time>950 && run_time<=982) {
					total_score += 58.6;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 57.9;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 57;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 55.8;
				} else if (run_time>1094 && run_time<=1136) {
					total_score += 54.2;
				} else if (run_time>1136 && run_time<=1183) {
					total_score += 52.1;
				} else if (run_time>1183 && run_time<=1233) {
					total_score += 49.3;
				} else if (run_time>1233 && run_time<=1288) {
					total_score += 45.6;
				} else if (run_time>1288 && run_time<=1348) {
					total_score += 40.8;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1133) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=21) {
					total_score += 10;
				} else if (push==20 || push==19) {
					total_score += 9.5;
				} else if (push==18) {
					total_score += 9.4;
				} else if (push==17) {
					total_score += 9;
				} else if (push==16) {
					total_score += 8.8;
				} else if (push==15) {
					total_score += 8.5;
				} else if (push==14) {
					total_score += 8;
				} else if (push==13) {
					total_score += 7.5;
				} else if (push==12) {
					total_score += 7;
				} else if (push==11) {
					total_score += 6.5;
				} else if (push==10) {
					total_score += 6;
				} else if (push==9) {
					total_score += 5.7;
				} else if (push==8) {
					total_score += 5.3;
				} else if (push==7) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=31) {
					total_score += 10;
				} else if (sit==28 || sit==29) {
					total_score += 9.5;
				} else if (sit==27) {
					total_score += 9.4;
				} else if (sit==26) {
					total_score += 9;
				} else if (sit==25) {
					total_score += 8.9;
				} else if (sit==24) {
					total_score += 8.8;
				} else if (sit==23) {
					total_score += 8.7;
				} else if (sit==22) {
					total_score += 8.6;
				} else if (sit==21) {
					total_score += 8.5;
				} else if (sit==20) {
					total_score += 8.4;
				} else if (sit==19) {
					total_score += 8.3;
				} else if (sit==18) {
					total_score += 8.2;
				} else if (sit==17) {
					total_score += 8;
				} else if (sit==16) {
					total_score += 7.8;
				} else if (sit==15) {
					total_score += 7.5;
				} else if (sit==14) {
					total_score += 7.3;
				} else if (sit==13) {
					total_score += 7;
				} else if (sit==12) {
					total_score += 6.5;
				} else if (sit==11) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				

				
			}
			
			
			// Adbominal Circumference
			if (abd<=31.5) {
				total_score += 20;
			} else if (abd==32) {
				total_score += 17.6;
			} else if (abd==32.5) {
				total_score += 17.1;
			} else if (abd==33) {
				total_score += 16.5;
			} else if (abd==33.5) {
				total_score += 15.9;
			} else if (abd==34) {
				total_score += 15.2;
			} else if (abd==34.5) {
				total_score += 14.5;
			} else if (abd==35) {
				total_score += 13.7;
			} else if (abd==35.5) {
				total_score += 12.8;
			} else {
				total_score += 0;
				rating = "Unsatisfactory";
			}
			
			
			
			
		}
			
		if (rating=="Unsatisfactory" && walk_score=="Fail") {

		} else if (rating=="Unsatisfactory" && walk_score=="Pass") {
			if (total_score>=36) {
				rating = "Excellent";
				
				
			} else if (total_score>=30 && total_score<36) {
				rating = "Satisfactory";
				
				
			} else {
				rating = "Unsatisfactory";
				
				
			}
		} else {
			if (total_score>=90) {
				rating = "Excellent";
				
				
			} else if (total_score>=75 && total_score<90) {
				rating = "Satisfactory";
				
				
			} else {
				rating = "Unsatisfactory";
				
				
			}
		}
		
        return total_score;

		
	}
	
/**
 * Provides a USAF PT Test Rating (Excellent, Satisfactory, etc)
 *
 * @param {gender} input The string "Male" or "Female".
 * @param {age} input Age, an integer.
 * @param {height} input height, an integer in inches.
 * @param {weight} input weight, an integer in pounds.
 * @param {abd} input Abdominal circumference measurement, in decimal inches.
 * @param {push} input Push-ups, an integer.
 * @param {sit} input Sit-ups, an integer.
 * @param {run_time} input The duration of the 1.5-mile run (or walk), in the format 12:59.99.
 * @param {is_walk} input Whether the run or walk test was performed, the string "TRUE" or "FALSE"
 * @return The PT test rating, as a string
 * @customfunction
 */
	function ptrating(gender,age,height,weight,abd,push,sit,run_time,is_walk){
		age = parseInt(age);
		height = parseInt(height);
		weight = parseInt(weight);
		abd = parseFloat(abd);
		push = parseInt(push);
		sit = parseInt(sit);
        if ( is_walk=="TRUE" ) {
          var walk_time = getSeconds(run_time);
          run_time = 0;
        } else {
          run_time = getSeconds(run_time);
          var walk_time=0;
        }  
		
		var total_score = 0;
		var rating;
		var bmi = (weight/(height*height))*703;
		var current_score = 0;	
		
		current_score = total_score 		

		// Determine gender
		if (gender=="Male") {
			
			
			// Determine age
			if (age<30) {
				
				// Run Time Score
				if (run_time<=552) {
					total_score += 60;
				} else if (run_time>552 && run_time<=574) {
					total_score += 59.7;
				} else if (run_time>574 && run_time<=585) {
					total_score += 59.3;
				} else if (run_time>585 && run_time<=598) {
					total_score += 58.9;
				} else if (run_time>598 && run_time<=610) {
					total_score += 58.5;
				} else if (run_time>610 && run_time<=623) {
					total_score += 57.9;
				} else if (run_time>623 && run_time<=637) {
					total_score += 57.3;
				} else if (run_time>637 && run_time<=651) {
					total_score += 56.6;
				} else if (run_time>651 && run_time<=666) {
					total_score += 55.7;
				} else if (run_time>666 && run_time<=682) {
					total_score += 54.8;
				} else if (run_time>682 && run_time<=698) {
					total_score += 53.7;
				} else if (run_time>698 && run_time<=716) {
					total_score += 52.4;
				} else if (run_time>716 && run_time<=734) {
					total_score += 50.9;
				} else if (run_time>734 && run_time<=753) {
					total_score += 49.2;
				} else if (run_time>753 && run_time<=773) {
					total_score += 47.2;
				} else if (run_time>773 && run_time<=794) {
					total_score += 44.9;
				} else if (run_time>794 && run_time<=816) {
					total_score += 42.3;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				

				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=976) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=67) {
					total_score += 10;
				} else if (push<67 && push>61) {
					total_score += 9.5;
				} else if (push==61) {
					total_score += 9.4;
				} else if (push==60) {
					total_score += 9.3;
				} else if (push==59) {
					total_score += 9.2;
				} else if (push==58) {
					total_score += 9.1;
				} else if (push==57) {
					total_score += 9;
				} else if (push==56) {
					total_score += 8.9;
				} else if (push==55 || push==54) {
					total_score += 8.8;
				} else if (push==53) {
					total_score += 8.7;
				} else if (push==52) {
					total_score += 8.6; 
				} else if (push==51) {
					total_score += 8.5;
				} else if (push==50) {
					total_score += 8.4;
				} else if (push==49) {
					total_score += 8.3;
				} else if (push==48) {
					total_score += 8.1;
				} else if (push==47) {
					total_score += 8;
				} else if (push==46) {
					total_score += 7.8;
				} else if (push==45) {
					total_score += 7.7;
				} else if (push==44) {
					total_score += 7.5;
				} else if (push==43) {
					total_score += 7.3;
				} else if (push==42) {
					total_score += 7.2;
				} else if (push==41) {
					total_score += 7;
				} else if (push==40) {
					total_score += 6.8;
				} else if (push==39) {
					total_score += 6.5;
				} else if (push==38) {
					total_score += 6.3;
				} else if (push==37) {
					total_score += 6;
				} else if (push==36) {
					total_score += 5.8;
				} else if (push==35) {
					total_score += 5.5;
				} else if (push==34) {
					total_score += 5.3;
				} else if (push==33) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=58) {
					total_score += 10;
				} else if (sit<58 && sit>54) {
					total_score += 9.5;
				} else if (sit==54) {
					total_score += 9.4;
				} else if (sit==53) {
					total_score += 9.2;
				} else if (sit==52) {
					total_score += 9;
				} else if (sit==51) {
					total_score += 8.8;
				} else if (sit==50) {
					total_score += 8.7;
				} else if (sit==49) {
					total_score += 8.5;
				} else if (sit==48) {
					total_score += 8.3;
				} else if (sit==47) {
					total_score += 8;
				} else if (sit==46) {
					total_score += 7.5;
				} else if (sit==45) {
					total_score += 7;
				} else if (sit==44) {
					total_score += 6.5;
				} else if (sit==43) {
					total_score += 6.3;
				} else if (sit==42) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
								
				
			} else if (age>29 && age<=39) {
				
				// Run Time Score
				if (run_time<=574) {
					total_score += 60;
				} else if (run_time>574 && run_time<=598) {
					total_score += 59.3;
				} else if (run_time>598 && run_time<=610) {
					total_score += 58.6;
				} else if (run_time>610 && run_time<=623) {
					total_score += 57.9;
				} else if (run_time>623 && run_time<=637) {
					total_score += 57.3;
				} else if (run_time>637 && run_time<=651) {
					total_score += 56.6;
				} else if (run_time>651 && run_time<=666) {
					total_score += 55.7;
				} else if (run_time>666 && run_time<=682) {
					total_score += 54.8;
				} else if (run_time>682 && run_time<=698) {
					total_score += 53.7;
				} else if (run_time>698 && run_time<=716) {
					total_score += 52.4;
				} else if (run_time>716 && run_time<=734) {
					total_score += 50.9;
				} else if (run_time>734 && run_time<=753) {
					total_score += 49.2;
				} else if (run_time>753 && run_time<=773) {
					total_score += 47.2;
				} else if (run_time>773 && run_time<=794) {
					total_score += 44.9;
				} else if (run_time>794 && run_time<=816) {
					total_score += 42.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 39.3;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=978) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=57) {
					total_score += 10;
				} else if (push<57 && push>51) {
					total_score += 9.5;
				} else if (push==51) {
					total_score += 9.4;
				} else if (push==50) {
					total_score += 9.3;
				} else if (push==49) {
					total_score += 9.2;
				} else if (push==48) {
					total_score += 9.2;
				} else if (push==47) {
					total_score += 9.1;
				} else if (push==46) {
					total_score += 9;
				} else if (push==45) {
					total_score += 8.9;
				} else if (push==44) {
					total_score += 8.8;
				} else if (push==43) {
					total_score += 8.7; 
				} else if (push==42) {
					total_score += 8.6;
				} else if (push==41) {
					total_score += 8.5;
				} else if (push==40) {
					total_score += 8.3;
				} else if (push==39) {
					total_score += 8;
				} else if (push==38) {
					total_score += 7.8;
				} else if (push==37) {
					total_score += 7.7;
				} else if (push==36) {
					total_score += 7.5;
				} else if (push==35) {
					total_score += 7.3;
				} else if (push==34) {
					total_score += 7;
				} else if (push==33) {
					total_score += 6.8;
				} else if (push==32) {
					total_score += 6.7;
				} else if (push==31) {
					total_score += 6.5;
				} else if (push==30) {
					total_score += 6;
				} else if (push==29) {
					total_score += 5.5;
				} else if (push==28) {
					total_score += 5.3;
				} else if (push==27) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				

				current_score = total_score;
				// Sit Ups Score
				if (sit>=54) {
					total_score += 10;
				} else if (sit<54 && sit>50) {
					total_score += 9.5;
				} else if (sit==50) {
					total_score += 9.4;
				} else if (sit==49) {
					total_score += 9.2;
				} else if (sit==48) {
					total_score += 9;
				} else if (sit==47) {
					total_score += 8.8;
				} else if (sit==46) {
					total_score += 8.7;
				} else if (sit==45) {
					total_score += 8.5;
				} else if (sit==44) {
					total_score += 8.3;
				} else if (sit==43) {
					total_score += 8;
				} else if (sit==42) {
					total_score += 7.5;
				} else if (sit==41) {
					total_score += 7;
				} else if (sit==40) {
					total_score += 6.5;
				} else if (sit==39) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
			} else if (age>39 && age<=49) {
				
				
				// Run Time Score
				if (run_time<=585) {
					total_score += 60;
				} else if (run_time>585 && run_time<=610) {
					total_score += 59.8;
				} else if (run_time>610 && run_time<=623) {
					total_score += 59.5;
				} else if (run_time>623 && run_time<=637) {
					total_score += 59.1;
				} else if (run_time>637 && run_time<=651) {
					total_score += 58.7;
				} else if (run_time>651 && run_time<=666) {
					total_score += 58.3;
				} else if (run_time>666 && run_time<=682) {
					total_score += 57.7;
				} else if (run_time>682 && run_time<=698) {
					total_score += 57.1;
				} else if (run_time>698 && run_time<=716) {
					total_score += 56.3;
				} else if (run_time>716 && run_time<=734) {
					total_score += 55.4;
				} else if (run_time>734 && run_time<=753) {
					total_score += 54.3;
				} else if (run_time>753 && run_time<=773) {
					total_score += 53.1;
				} else if (run_time>773 && run_time<=794) {
					total_score += 51.5;
				} else if (run_time>794 && run_time<=816) {
					total_score += 49.8;
				} else if (run_time>816 && run_time<=840) {
					total_score += 47.7;
				} else if (run_time>840 && run_time<=865) {
					total_score += 45.2;
				} else if (run_time>865 && run_time<=892) {
					total_score += 42.3;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=983) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=44) {
					total_score += 10;
				} else if (push<44 && push>39) {
					total_score += 9.5;
				} else if (push==39) {
					total_score += 9.4;
				} else if (push==38) {
					total_score += 9.2;
				} else if (push==37) {
					total_score += 9.1;
				} else if (push==36) {
					total_score += 9;
				} else if (push==35) {
					total_score += 8.8;
				} else if (push==34) {
					total_score += 8.5;
				} else if (push==33) {
					total_score += 8.4;
				} else if (push==32) {
					total_score += 8.3;
				} else if (push==31) {
					total_score += 8.1; 
				} else if (push==30) {
					total_score += 8;
				} else if (push==29) {
					total_score += 7.5;
				} else if (push==28) {
					total_score += 7.3;
				} else if (push==27) {
					total_score += 7.2;
				} else if (push==26) {
					total_score += 7;
				} else if (push==25) {
					total_score += 6.5;
				} else if (push==24) {
					total_score += 6;
				} else if (push==23) {
					total_score += 5.8;
				} else if (push==22) {
					total_score += 5.5;
				} else if (push==21) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=50) {
					total_score += 10;
				} else if (sit<50 && sit>46) {
					total_score += 9.5;
				} else if (sit==46) {
					total_score += 9.4;
				} else if (sit==45) {
					total_score += 9.2;
				} else if (sit==44) {
					total_score += 9.1;
				} else if (sit==43) {
					total_score += 9;
				} else if (sit==42) {
					total_score += 8.8;
				} else if (sit==41) {
					total_score += 8.7;
				} else if (sit==40) {
					total_score += 8.5;
				} else if (sit==39) {
					total_score += 8;
				} else if (sit==38) {
					total_score += 7.8;
				} else if (sit==37) {
					total_score += 7.5;
				} else if (sit==36) {
					total_score += 7;
				} else if (sit==35) {
					total_score += 6.5;
				} else if (sit==34) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
			} else if (age>49 && age<=59) {
				
				
				// Run Time Score
				if (run_time<=637) {
					total_score += 60;
				} else if (run_time>637 && run_time<=666) {
					total_score += 59.7;
				} else if (run_time>666 && run_time<=682) {
					total_score += 59.4;
				} else if (run_time>682 && run_time<=698) {
					total_score += 59;
				} else if (run_time>698 && run_time<=716) {
					total_score += 58.5;
				} else if (run_time>716 && run_time<=734) {
					total_score += 58;
				} else if (run_time>734 && run_time<=753) {
					total_score += 57.3;
				} else if (run_time>753 && run_time<=773) {
					total_score += 56.5;
				} else if (run_time>773 && run_time<=794) {
					total_score += 55.6;
				} else if (run_time>794 && run_time<=816) {
					total_score += 54.5;
				} else if (run_time>816 && run_time<=840) {
					total_score += 53.3;
				} else if (run_time>840 && run_time<=865) {
					total_score += 51.8;
				} else if (run_time>865 && run_time<=892) {
					total_score += 50;
				} else if (run_time>892 && run_time<=920) {
					total_score += 47.9;
				} else if (run_time>920 && run_time<=950) {
					total_score += 45.4;
				} else if (run_time>950 && run_time<=982) {
					total_score += 42.4;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1000) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=44) {
					total_score += 10;
				} else if (push<44 && push>=39) {
					total_score += 9.5;
				} else if (push==38) {
					total_score += 9.4;
				} else if (push==37) {
					total_score += 9.4;
				} else if (push==36) {
					total_score += 9.3;
				} else if (push==35) {
					total_score += 9.3;
				} else if (push==34) {
					total_score += 9.2;
				} else if (push==33) {
					total_score += 9.2;
				} else if (push==32) {
					total_score += 9.1;
				} else if (push==31) {
					total_score += 9.1;
				} else if (push==30) {
					total_score += 9; 
				} else if (push==29) {
					total_score += 8.8;
				} else if (push==28) {
					total_score += 8.5;
				} else if (push==27) {
					total_score += 8.3;
				} else if (push==26) {
					total_score += 8.2;
				} else if (push==25) {
					total_score += 8;
				} else if (push==24) {
					total_score += 7.5;
				} else if (push==23) {
					total_score += 7.3;
				} else if (push==22) {
					total_score += 7.2;
				} else if (push==21) {
					total_score += 7;
				} else if (push==20) {
					total_score += 6.5;
				} else if (push==19) {
					total_score += 6;
				} else if (push==18) {
					total_score += 5.8;
				} else if (push==17) {
					total_score += 5.5;
				} else if (push==16) {
					total_score += 5.3;
				} else if (push==15) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=46) {
					total_score += 10;
				} else if (sit<46 && sit>42) {
					total_score += 9.5;
				} else if (sit==42) {
					total_score += 9.4;
				} else if (sit==41) {
					total_score += 9.2;
				} else if (sit==40) {
					total_score += 9.1;
				} else if (sit==39) {
					total_score += 9;
				} else if (sit==38) {
					total_score += 8.8;
				} else if (sit==37) {
					total_score += 8.7;
				} else if (sit==36) {
					total_score += 8.5;
				} else if (sit==35) {
					total_score += 8;
				} else if (sit==34) {
					total_score += 7.8;
				} else if (sit==33) {
					total_score += 7.5;
				} else if (sit==32) {
					total_score += 7.3;
				} else if (sit==31) {
					total_score += 7;
				} else if (sit==30) {
					total_score += 6.5;
				} else if (sit=29) {
					total_score += 6.3;
				} else if (sit=28) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
				
			} else if (age>59) {
				
				
				// Run Time Score
				if (run_time<=682) {
					total_score += 60;
				} else if (run_time>682 && run_time<=716) {
					total_score += 59.7;
				} else if (run_time>716 && run_time<=734) {
					total_score += 59.4;
				} else if (run_time>734 && run_time<=753) {
					total_score += 59;
				} else if (run_time>753 && run_time<=773) {
					total_score += 58.5;
				} else if (run_time>773 && run_time<=794) {
					total_score += 58;
				} else if (run_time>794 && run_time<=816) {
					total_score += 57.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 56.5;
				} else if (run_time>840 && run_time<=865) {
					total_score += 55.6;
				} else if (run_time>865 && run_time<=892) {
					total_score += 54.5;
				} else if (run_time>892 && run_time<=920) {
					total_score += 53.3;
				} else if (run_time>920 && run_time<=950) {
					total_score += 51.8;
				} else if (run_time>950 && run_time<=982) {
					total_score += 50;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 47.9;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 45.4;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 42.4;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1018) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=30) {
					total_score += 10;
				} else if (push<30 && push>28) {
					total_score += 9.5;
				} else if (push==27) {
					total_score += 9.3;
				} else if (push==26) {
					total_score += 9;
				} else if (push==25) {
					total_score += 8.8;
				} else if (push==24) {
					total_score += 8.5;
				} else if (push==23) {
					total_score += 8;
				} else if (push==22) {
					total_score += 7.5;
				} else if (push==21) {
					total_score += 7;
				} else if (push==20) {
					total_score += 6.5;
				} else if (push==19) {
					total_score += 6.3;
				} else if (push==18) {
					total_score += 6;
				} else if (push==17) {
					total_score += 5.8;
				} else if (push==16) {
					total_score += 5.5;
				} else if (push==15) {
					total_score += 5.3;
				} else if (push==14) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=42) {
					total_score += 10;
				} else if (sit<42 && sit>38) {
					total_score += 9.5;
				} else if (sit==38) {
					total_score += 9.4;
				} else if (sit==37) {
					total_score += 9.2;
				} else if (sit==36) {
					total_score += 9.1;
				} else if (sit==35) {
					total_score += 9;
				} else if (sit==34) {
					total_score += 8.9;
				} else if (sit==33) {
					total_score += 8.8;
				} else if (sit==32) {
					total_score += 8.6;
				} else if (sit==31) {
					total_score += 8.5;
				} else if (sit==30) {
					total_score += 8;
				} else if (sit==29) {
					total_score += 7.8;
				} else if (sit==28) {
					total_score += 7.5;
				} else if (sit==27) {
					total_score += 7.3;
				} else if (sit==26) {
					total_score += 7;
				} else if (sit==25) {
					total_score += 6.8;
				} else if (sit==24) {
					total_score += 6.5;
				} else if (sit==23) {
					total_score += 6.3;
				} else if (sit==22) {
					total_score += 6;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				
				
				
			}
			
			current_score = total_score;
			// Abdominal Circumference Score
			
			if (abd<=35) {
				total_score += 20;
			} else if (abd==35.5) {
				total_score += 17.6;
			} else if (abd==36) {
				total_score += 17;
			} else if (abd==36.5) {
				total_score += 16.4;
			} else if (abd==37) {
				total_score += 15.8;
			} else if (abd==37.5) {
				total_score += 15.1;
			} else if (abd==38) {
				total_score += 14.4;
			} else if (abd==38.5) {
				total_score += 13.5;
			} else if (abd==39) {
				total_score += 12.6;
			} else {
				total_score += 0;
				rating = "Unsatisfactory";
			}
			
			
			
		} else {
			// Female calculations
			
			// Determine age
			if (age<30) {
				
				// Run Time Score
				if (run_time<=623) {
					total_score += 60;
				} else if (run_time>623 && run_time<=651) {
					total_score += 59.9;
				} else if (run_time>651 && run_time<=666) {
					total_score += 59.5;
				} else if (run_time>666 && run_time<=682) {
					total_score += 59.2;
				} else if (run_time>682 && run_time<=698) {
					total_score += 58.9;
				} else if (run_time>698 && run_time<=716) {
					total_score += 58.6;
				} else if (run_time>716 && run_time<=734) {
					total_score += 58.1;
				} else if (run_time>734 && run_time<=754) {
					total_score += 57.6;
				} else if (run_time>754 && run_time<=773) {
					total_score += 57;
				} else if (run_time>773 && run_time<=794) {
					total_score += 56.2;
				} else if (run_time>794 && run_time<=816) {
					total_score += 55.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 54.2;
				} else if (run_time>840 && run_time<=865) {
					total_score += 52.8;
				} else if (run_time>865 && run_time<=892) {
					total_score += 51.2;
				} else if (run_time>892 && run_time<=920) {
					total_score += 49.3;
				} else if (run_time>920 && run_time<=950) {
					total_score += 46.9;
				} else if (run_time>950 && run_time<=982) {
					total_score += 44.1;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1042) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=47) {
					total_score += 10;
				} else if (push>=42 && push<47) {
					total_score += 9.5;
				} else if (push==41) {
					total_score += 9.4;
				} else if (push==40) {
					total_score += 9.3;
				} else if (push==39) {
					total_score += 9.2;
				} else if (push==38) {
					total_score += 9.1;
				} else if (push==37) {
					total_score += 9;
				} else if (push==36) {
					total_score += 8.9;
				} else if (push==35) {
					total_score += 8.8;
				} else if (push==34) {
					total_score += 8.6;
				} else if (push==33) {
					total_score += 8.5;
				} else if (push==32) {
					total_score += 8.4;
				} else if (push==31) {
					total_score += 8.3;
				} else if (push==30) {
					total_score += 8.2;
				} else if (push==29) {
					total_score += 8.1;
				} else if (push==28) {
					total_score += 8;
				} else if (push==27) {
					total_score += 7.5;
				} else if (push==26) {
					total_score += 7.3;
				} else if (push==25) {
					total_score += 7.2;
				} else if (push==24) {
					total_score += 7;
				} else if (push==23) {
					total_score += 6.5;
				} else if (push==22) {
					total_score += 6.3;
				} else if (push==21) {
					total_score += 6;
				} else if (push==20) {
					total_score += 5.8;
				} else if (push==19) {
					total_score += 5.5;
				} else if (push==18) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=54) {
					total_score += 10;
				} else if (sit<54 && sit>50) {
					total_score += 9.5;
				} else if (sit==50) {
					total_score += 9.4;
				} else if (sit==49) {
					total_score += 9;
				} else if (sit==48) {
					total_score += 8.9;
				} else if (sit==47) {
					total_score += 8.8;
				} else if (sit==46) {
					total_score += 8.6;
				} else if (sit==45) {
					total_score += 8.5;
				} else if (sit==44) {
					total_score += 8;
				} else if (sit==43) {
					total_score += 7.8;
				} else if (sit==42) {
					total_score += 7.5;
				} else if (sit==41) {
					total_score += 7;
				} else if (sit==40) {
					total_score += 6.8;
				} else if (sit==39) {
					total_score += 6.5;
				} else if (sit==38) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
			} else if (age>29 && age<=39) {
				// Females 30-39


				// Run Time Score
				if (run_time<=651) { // < 10:51
					total_score += 60;
				} else if (run_time>651 && run_time<=682) { // 10:52 - 11:22
					total_score += 59.5;
				} else if (run_time>682 && run_time<=698) { // 11:23 - 11:38
					total_score += 59;
				} else if (run_time>698 && run_time<=716) { // 11:39 - 11:56
					total_score += 58.6;
				} else if (run_time>716 && run_time<=734) { // 11:57 - 12:14
					total_score += 58.1;
				} else if (run_time>734 && run_time<=753) { // 12:15 - 12:33
					total_score += 57.6;
				} else if (run_time>753 && run_time<=773) { // 12:34 - 12:53
					total_score += 57;
				} else if (run_time>773 && run_time<=794) { // 12:54 - 13:14
					total_score += 56.2;
				} else if (run_time>794 && run_time<=816) { // 13:15 - 13:36
					total_score += 55.3;
				} else if (run_time>816 && run_time<=840) { // 13:37 - 14:00
					total_score += 54.2;
				} else if (run_time>840 && run_time<=865) { // 14:01 - 14:25
					total_score += 52.8;
				} else if (run_time>865 && run_time<=892) { // 14:26 - 14:52
					total_score += 51.2;
				} else if (run_time>892 && run_time<=920) { // 14:53 - 15:20
					total_score += 49.3;
				} else if (run_time>920 && run_time<=950) { // 15:21 - 15:50
					total_score += 46.9;
				} else if (run_time>950 && run_time<=982) { // 15:51 - 16:22
					total_score += 44.1;
				} else if (run_time>982 && run_time<=1017) { // 16:23 - 16:57
					total_score += 40.8;
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1048) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Up Score
				if (push>=46) {
					total_score += 10;
				} else if (push<46 && push>39) {
					total_score += 9.5;
				} else if (push==39) {
					total_score += 9.4;
				} else if (push==38) {
					total_score += 9.3;
				} else if (push==37) {
					total_score += 9.3;
				} else if (push==36) {
					total_score += 9.2;
				} else if (push==35) {
					total_score += 9.1;
				} else if (push==34) {
					total_score += 9.1;
				} else if (push==33) {
					total_score += 9;
				} else if (push==32) {
					total_score += 8.9;
				} else if (push==31) {
					total_score += 8.9;
				} else if (push==30) {
					total_score += 8.8;
				} else if (push==29) {
					total_score += 8.7;
				} else if (push==28) {
					total_score += 8.6;
				} else if (push==27) {
					total_score += 8.6;
				} else if (push==26) {
					total_score += 8.5;
				} else if (push==25) {
					total_score += 8.3;
				} else if (push==24) {
					total_score += 8.2;
				} else if (push==23) {
					total_score += 8;
				} else if (push==22) {
					total_score += 7.9;
				} else if (push==21) {
					total_score += 7.8;
				} else if (push==20) {
					total_score += 7.6;
				} else if (push==19) {
					total_score += 7.5;
				} else if (push==18) {
					total_score += 7;
				} else if (push==17) {
					total_score += 6.8;
				} else if (push==16) {
					total_score += 6.5;
				} else if (push==15) {
					total_score += 6;
				} else if (push==14) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=45) {
					total_score += 10;
				} else if (sit<45 && sit>41) {
					total_score += 9.5;
				} else if (sit==41) {
					total_score += 9.4;
				} else if (sit==40) {
					total_score += 9;
				} else if (sit==39) {
					total_score += 8.8;
				} else if (sit==38) {
					total_score += 8.5;
				} else if (sit==37) {
					total_score += 8.3;
				} else if (sit==36) {
					total_score += 8.2;
				} else if (sit==35) {
					total_score += 8;
				} else if (sit==34) {
					total_score += 7.8;
				} else if (sit==33) {
					total_score += 7.5;
				} else if (sit==32) {
					total_score += 7;
				} else if (sit==31) {
					total_score += 6.8;
				} else if (sit==30) {
					total_score += 6.5;
				} else if (sit==29) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
			} else if (age>39 && age<=49) {
				// Females 40-49

				// Run Time Score
				if (run_time<=682) {
					total_score += 60;
				} else if (run_time>682 && run_time<=716) {
					total_score += 59.9;
				} else if (run_time>716 && run_time<=734) {
					total_score += 59.8;
				} else if (run_time>734 && run_time<=753) {
					total_score += 59.6;
				} else if (run_time>753 && run_time<=773) {
					total_score += 59.4;
				} else if (run_time>773 && run_time<=794) {
					total_score += 59.1;
				} else if (run_time>794 && run_time<=816) {
					total_score += 58.7;
				} else if (run_time>816 && run_time<=840) {
					total_score += 58.2;
				} else if (run_time>840 && run_time<=865) {
					total_score += 57.7;
				} else if (run_time>865 && run_time<=892) {
					total_score += 56.9;
				} else if (run_time>892 && run_time<=920) {
					total_score += 56;
				} else if (run_time>920 && run_time<=950) {
					total_score += 54.8;
				} else if (run_time>950 && run_time<=982) {
					total_score += 53.3;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 51.4;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 49;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 45.9;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1069) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				

				current_score = total_score;
				// Push Ups Score
				if (push>=38) {
					total_score += 10;
				} else if (push<38 && push>32) {
					total_score += 9.5;
				} else if (push==32) {
					total_score += 9.4;
				} else if (push==31) {
					total_score += 9.2;
				} else if (push==30) {
					total_score += 9.1;
				} else if (push==29) {
					total_score += 9;
				} else if (push==28) {
					total_score += 8.9;
				} else if (push==27) {
					total_score += 8.8;
				} else if (push==26) {
					total_score += 8.7;
				} else if (push==25) {
					total_score += 8.6;
				} else if (push==24) {
					total_score += 8.6;
				} else if (push==23) {
					total_score += 8.5;
				} else if (push==22) {
					total_score += 8.4;
				} else if (push==21) {
					total_score += 8.3;
				} else if (push==20) {
					total_score += 8.2;
				} else if (push==19) {
					total_score += 8.1;
				} else if (push==18) {
					total_score += 8;
				} else if (push==17) {
					total_score += 7.8;
				} else if (push==16) {
					total_score += 7.5;
				} else if (push==15) {
					total_score += 7;
				} else if (push==14) {
					total_score += 6.5
				} else if (push==13) {
					total_score += 6;
				} else if (push==12) {
					total_score += 5.5;
				} else if (push==11) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=41) {
					total_score += 10;
				} else if (sit<41 && sit>37) {
					total_score += 9.5;
				} else if (sit==37) {
					total_score += 9.4;
				} else if (sit==36) {
					total_score += 9.2;
				} else if (sit==35) {
					total_score += 9.1;
				} else if (sit==34) {
					total_score += 9;
				} else if (sit==33) {
					total_score += 8.8;
				} else if (sit==32) {
					total_score += 8.5;
				} else if (sit==31) {
					total_score += 8.3;
				} else if (sit==30) {
					total_score += 8.2;
				} else if (sit==29) {
					total_score += 8;
				} else if (sit==28) {
					total_score += 7.5;
				} else if (sit==27) {
					total_score += 7;
				} else if (sit==26) {
					total_score += 6.8;
				} else if (sit==25) {
					total_score += 6.4;
				} else if (sit==24) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
			} else if (age>49 && age<=59) {
				
				// Run Time Score
				if (run_time<=773) {
					total_score += 60;
				} else if (run_time>773 && run_time<=816) {
					total_score += 59.8;
				} else if (run_time>816 && run_time<=840) {
					total_score += 59.6;
				} else if (run_time>840 && run_time<=865) {
					total_score += 59.3;
				} else if (run_time>865 && run_time<=892) {
					total_score += 58.9;
				} else if (run_time>892 && run_time<=920) {
					total_score += 58.4;
				} else if (run_time>920 && run_time<=950) {
					total_score += 57.7;
				} else if (run_time>950 && run_time<=982) {
					total_score += 56.8;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 55.6;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 54;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 51.9;
				} else if (run_time>1094 && run_time<=1136) {
					total_score += 49.2;
				} else if (run_time>1136 && run_time<=1183) {
					total_score += 45.5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1091) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=35) {
					total_score += 10;
				} else if (push<35 && push>29) {
					total_score += 9.5;
				} else if (push==29) {
					total_score += 9.4;
				} else if (push==28) {
					total_score += 9.3;
				} else if (push==27) {
					total_score += 9.2;
				} else if (push==26) {
					total_score += 9.1;
				} else if (push==25) {
					total_score += 9;
				} else if (push==24) {
					total_score += 8.8;
				} else if (push==23) {
					total_score += 8.7;
				} else if (push==22) {
					total_score += 8.6;
				} else if (push==21) {
					total_score += 8.6;
				} else if (push==20) {
					total_score += 8.5;
				} else if (push==19) {
					total_score += 8.4;
				} else if (push==18) {
					total_score += 8.3;
				} else if (push==17) {
					total_score += 8.2;
				} else if (push==16) {
					total_score += 8.1;
				} else if (push==15) {
					total_score += 8;
				} else if (push==14) {
					total_score += 7.5;
				} else if (push==13) {
					total_score += 7;
				} else if (push==12) {
					total_score += 6.5;
				} else if (push==11) {
					total_score += 6;
				} else if (push==10) {
					total_score += 5.5;
				} else if (push==9) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=32) {
					total_score += 10;
				} else if (sit==30 || sit==31) {
					total_score += 9.5;
				} else if (sit==29) {
					total_score += 9;
				} else if (sit==28) {
					total_score += 8.9;
				} else if (sit==27) {
					total_score += 8.8;
				} else if (sit==26) {
					total_score += 8.6;
				} else if (sit==25) {
					total_score += 8.5;
				} else if (sit==24) {
					total_score += 8;
				} else if (sit==23) {
					total_score += 7.5;
				} else if (sit==22) {
					total_score += 7;
				} else if (sit==21) {
					total_score += 6.5;
				} else if (sit==20) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				

				
			} else if (age>59) {
				
				// Run Time Score
				if (run_time<=840) {
					total_score += 60;
				} else if (run_time>840 && run_time<=892) {
					total_score += 59.8;
				} else if (run_time>892 && run_time<=920) {
					total_score += 59.5;
				} else if (run_time>920 && run_time<=950) {
					total_score += 59.1;
				} else if (run_time>950 && run_time<=982) {
					total_score += 58.6;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 57.9;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 57;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 55.8;
				} else if (run_time>1094 && run_time<=1136) {
					total_score += 54.2;
				} else if (run_time>1136 && run_time<=1183) {
					total_score += 52.1;
				} else if (run_time>1183 && run_time<=1233) {
					total_score += 49.3;
				} else if (run_time>1233 && run_time<=1288) {
					total_score += 45.6;
				} else if (run_time>1288 && run_time<=1348) {
					total_score += 40.8;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1133) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				
				
				current_score = total_score;
				// Push Ups Score
				if (push>=21) {
					total_score += 10;
				} else if (push==20 || push==19) {
					total_score += 9.5;
				} else if (push==18) {
					total_score += 9.4;
				} else if (push==17) {
					total_score += 9;
				} else if (push==16) {
					total_score += 8.8;
				} else if (push==15) {
					total_score += 8.5;
				} else if (push==14) {
					total_score += 8;
				} else if (push==13) {
					total_score += 7.5;
				} else if (push==12) {
					total_score += 7;
				} else if (push==11) {
					total_score += 6.5;
				} else if (push==10) {
					total_score += 6;
				} else if (push==9) {
					total_score += 5.7;
				} else if (push==8) {
					total_score += 5.3;
				} else if (push==7) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				
				current_score = total_score;
				// Sit Ups Score
				if (sit>=31) {
					total_score += 10;
				} else if (sit==28 || sit==29) {
					total_score += 9.5;
				} else if (sit==27) {
					total_score += 9.4;
				} else if (sit==26) {
					total_score += 9;
				} else if (sit==25) {
					total_score += 8.9;
				} else if (sit==24) {
					total_score += 8.8;
				} else if (sit==23) {
					total_score += 8.7;
				} else if (sit==22) {
					total_score += 8.6;
				} else if (sit==21) {
					total_score += 8.5;
				} else if (sit==20) {
					total_score += 8.4;
				} else if (sit==19) {
					total_score += 8.3;
				} else if (sit==18) {
					total_score += 8.2;
				} else if (sit==17) {
					total_score += 8;
				} else if (sit==16) {
					total_score += 7.8;
				} else if (sit==15) {
					total_score += 7.5;
				} else if (sit==14) {
					total_score += 7.3;
				} else if (sit==13) {
					total_score += 7;
				} else if (sit==12) {
					total_score += 6.5;
				} else if (sit==11) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				
				

				
			}
			
			
			// Adbominal Circumference
			if (abd<=31.5) {
				total_score += 20;
			} else if (abd==32) {
				total_score += 17.6;
			} else if (abd==32.5) {
				total_score += 17.1;
			} else if (abd==33) {
				total_score += 16.5;
			} else if (abd==33.5) {
				total_score += 15.9;
			} else if (abd==34) {
				total_score += 15.2;
			} else if (abd==34.5) {
				total_score += 14.5;
			} else if (abd==35) {
				total_score += 13.7;
			} else if (abd==35.5) {
				total_score += 12.8;
			} else {
				total_score += 0;
				rating = "Unsatisfactory";
			}
			
			
			
			
		}
			
		if (rating=="Unsatisfactory" && walk_score=="Fail") {

		} else if (rating=="Unsatisfactory" && walk_score=="Pass") {
			if (total_score>=36) {
				rating = "Excellent";
				
				
			} else if (total_score>=30 && total_score<36) {
				rating = "Satisfactory";
				
				
			} else {
				rating = "Unsatisfactory";
				
				
			}
		} else {
			if (total_score>=90) {
				rating = "Excellent";
				
				
			} else if (total_score>=75 && total_score<90) {
				rating = "Satisfactory";
				
				
			} else {
				rating = "Unsatisfactory";
				
				
			}
		}
		
        return rating;

		
	}
	
	
	
	
