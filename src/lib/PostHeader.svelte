<script lang="ts">
	export let title: string;
	export let description: string;
	export let tags: string[];
	export let date: string;
	
	// Function to get month name
	function getMonthName(monthNumber: string): string {
	  const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	  ];
	  return months[parseInt(monthNumber) - 1];
	}
	
	// Function to split date into [day, month, year]
	function splitDate(dateString: string): [string, string, string] {
	  const [year, month, day] = dateString.split('-');
	  return [day, getMonthName(month), year];
	}
	
	const [day, month, year] = splitDate(date);
	</script>
	
	<header>
	  <h1>{title}</h1>
	  <h2>{description}</h2>
	
	  <div class="tag-container">
		{#each tags as tag}
		  <kbd class="tag">{tag}</kbd>
		{/each}
	  </div>
	
	  <div class="date-container">
		<kbd class="date">{day}</kbd>
		<kbd class="date">{month}</kbd>
		<kbd class="date">{year}</kbd>
	  </div>
	</header>
	
	<style lang="postcss">
		
	  header {
		@apply p-1 m-1 mb-8 relative;
	  }
	
	  h1 {
		@apply text-4xl font-bold mb-2;
	  }
	
	  h2 {
		@apply text-2xl mb-4;
	  }
	
	  .tag-container {
		@apply mb-4;
	  }
	
	  kbd.tag {
		@apply p-1 m-1 text-blue-800 dark:text-blue-100 bg-blue-100 dark:bg-blue-800 ml-2  mb-2 inline-block;
	  }
	
	  .date-container {
		@apply absolute top-0 right-0 flex;
	  }
	
	  kbd.date {
		@apply p-1 m-1 text-orange-800 dark:text-orange-100 bg-orange-100 dark:bg-orange-800  ;
	  }
	</style>