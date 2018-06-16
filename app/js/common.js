// MAIN TABS
$(".tab_item").not(":first").hide();
$(".main-tab .tab").click(function() {
		$(".main-tab .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");