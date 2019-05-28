$(document).ready(function() {
	var counter = 0;
	var question = 1;
	var score = 0;
	
	$("#a1, #a2, #a3, .questions, #answer, h3, #next").hide();
	
	var quizQuestions = [{
		question:"What's another name for synthetic cannabinoids? ",
		choices:["Medical marijuana", "Cocaine", "K2/Spice"],
		answer: "K2/Spice",
		explain: "Synthetic cannabinoids,also called K2 or Spice act on the same brain cell receptors as marijuana, some people call them 'fake weed,' but they can affect the brain differently and more powerfully than marijuana does. "
	},
	{
		question:"Roughly how many chemicals occur naturally in marijuana?",
		choices:["40", "4", "400"],
		answer: "400",
		explain: "Marijuana contains rougly 400 chemicals"
	},
	{
		question:" Which of the following drugs are synthetic?",
		choices:["K2/Spice", "MDMA (Molly or Ecstasy)", "All of the above"],
		answer: "All of the above",
		explain: "All of these drugs are often made illegally in laboratories."
	},
	{
		question:"The chemical in marijuana that causes the user to feel 'high' is?",
		choices:["Dopamine", "Norepinephrine ", "Delta-9-Tetrahydrocannabinol (THC)"],
		answer: "Delta-9-Tetrahydrocannabinol (THC)",
		explain: "The chemical in marijuana that causes the user to feel 'high' is delta-9-tetrahydrocannabinol (THC). There are more than 400 chemicals in marijuana, but THC is the active ingredient responsible for increasing dopamine levels, the chemical in the brain that produces feelings of pleasure. "
	},	
	{
		question:"Marijuana users experience short-term memory loss because of the drug's effect on?",
		choices:["The heart ", "The hippocampus ", "The basal ganglia"],
		answer: "The hippocampus ",
		explain:"Marijuana users experience short-term memory loss because of the drug's effect on the hippocampus. The hippocampus is the part of the brain involved in learning and memory. The basal ganglia, on the other hand, is an area of the brain that helps control movement." 
	},
	{
		question:"One reason illegal synthetic drugs are dangerous is that they often have added chemicals that make them more ?",
		choices:["Toxic", "Untraceable", "Affordable"],
		answer: "Toxic",
		explain: "Makers of illegal synthetics often add chemicals to make the drugs more powerful. This can make them more dangerous or toxic, too, because there's no way to know what chemicals the drugs contain or in what amounts."
	},
	{
		question:"How long does it take for marijuana to reach peak levels in the brain?",
		choices:["90 seconds", "10 minutes", "1 minute"],
		answer: "10 minutes",
		explain: "It takes about 10 minutes for marijuana to reach peak levels in the brain."
	},
	{
		question:" In addition to causing trouble in the brain, smoking marijuana may increase the risk of ?",
		choices:["Amputation and obesity ", "Kidney stones and ruptured appendix", "Heart attacks and respiratory illnesses"],
		answer: "Heart attacks and respiratory illnesses",
		explain: " In addition to causing trouble in the brain, smoking marijuana may increasethe risk of heart attacks and respiratory illnesses."
	}]
	

	$("#next ,#start").on("click", function(){
		
		$("h3").show();
		$("#a1, #a2, #a3, .questions, #answer").empty().show();
		$("#next, #answer, #start").hide();
		
		function incrementCounter(){
			$("#count").text(question);
		};
	
	
	
		if(quizQuestions[counter]){
			$(".questions").append("<h2>" + quizQuestions[counter].question + "</h2>")
			$("#a1").append(quizQuestions[counter].choices[0]);
			$("#a2").append(quizQuestions[counter].choices[1]);
			$("#a3").append(quizQuestions[counter].choices[2]);
			incrementCounter();
			counter++;
			question++;
		}
		else{
			$("#score").text("You answered " + score +" correctly out of 8");
			$(".choices,#count ,h3").hide();
		}
	});

	
	
	$( ".choices" ).click(function() {
		var $answer = $( this ).text();
		if($answer == quizQuestions[counter-1].answer){
			score += 1;
		}
		
		$("#next").show();
		if(quizQuestions[counter-1]){
			$("#answer").append(quizQuestions[counter-1].explain).toggle("slow");
		}
	});
});

    
