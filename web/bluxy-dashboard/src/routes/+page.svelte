<script lang="ts">
	import { fetchConfig, fetchSystemState } from '$lib/api';

	let conf = $state(fetchConfig());
	let sysState = $state(fetchSystemState());

	let copiedTimeout: number;
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		clearTimeout(copiedTimeout);
		copiedTimeout = setTimeout(() => {
			document.querySelector('.copied-message')?.classList.add('hidden');
		}, 2000);
		document.querySelector('.copied-message')?.classList.remove('hidden');
	};
</script>

{#await Promise.all([conf, sysState])}
	<div class="flex min-h-screen items-center justify-center">
		<div
			class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
		></div>
	</div>
{:then [config, systemState]}
	<div class="min-h-screen bg-gray-100 p-8">
		<!-- Server Info Card -->
		<div class="mb-8 rounded-lg bg-white p-6 shadow-lg">
			<h1 class="mb-4 text-2xl font-bold text-gray-800">{config.hostname}</h1>
			{#if config.description}
				<p class="mb-4 text-gray-600">{config.description}</p>
			{/if}
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				<div class="rounded-lg bg-gray-50 p-4">
					<p class="text-sm text-gray-500">Directory</p>
					<p class="truncate font-mono text-sm">{config.dir || 'Not set'}</p>
				</div>
				<div class="rounded-lg bg-gray-50 p-4">
					<p class="text-sm text-gray-500">Dashboard Port</p>
					<p class="font-semibold">{config.dashboard || 'Not set'}</p>
				</div>
				<div class="rounded-lg bg-gray-50 p-4">
					<p class="text-sm text-gray-500">Mode</p>
					<p class="font-semibold">{config.ephemeral ? 'Ephemeral' : 'Persistent'}</p>
				</div>
			</div>
		</div>

		<!-- System Info Card -->
		<div class="mb-8 rounded-lg bg-white p-6 shadow-lg">
			<h2 class="mb-4 text-xl font-bold text-gray-800">System Information</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- CPU Info -->
				<div class="space-y-4">
					<div>
						<p class="text-gray-500">CPU Model</p>
						<p class="font-semibold">{systemState.cpu_model}</p>
					</div>
					<div>
						<p class="text-gray-500">CPU Cores</p>
						<p class="font-semibold">{systemState.cpu_cores}</p>
					</div>
					<div>
						<div class="mb-1 flex justify-between">
							<p class="text-gray-500">CPU Usage</p>
							<span class="text-gray-700">{systemState.cpu_usage_percent.toFixed(1)}%</span>
						</div>
						<div class="h-2 w-full rounded-full bg-gray-200">
							<div
								class="h-2 rounded-full bg-blue-600"
								style="width: {systemState.cpu_usage_percent}%"
							></div>
						</div>
					</div>
				</div>

				<!-- Memory Info -->
				<div class="space-y-4">
					<div>
						<p class="text-gray-500">Total Memory</p>
						<p class="font-semibold">
							{(systemState.mem_total / 1024 / 1024 / 1024).toFixed(2)} GB
						</p>
					</div>
					<div>
						<p class="text-gray-500">Used Memory</p>
						<p class="font-semibold">{(systemState.mem_used / 1024 / 1024 / 1024).toFixed(2)} GB</p>
					</div>
					<div>
						<div class="mb-1 flex justify-between">
							<p class="text-gray-500">Memory Usage</p>
							<span class="text-gray-700">{systemState.mem_used_percent}%</span>
						</div>
						<div class="h-2 w-full rounded-full bg-gray-200">
							<div
								class="h-2 rounded-full bg-blue-600"
								style="width: {systemState.mem_used_percent}%"
							></div>
						</div>
					</div>
				</div>

				<!-- Go Runtime Info -->
				<div class="space-y-4">
					<div>
						<p class="text-gray-500">Go Version</p>
						<p class="font-semibold">{systemState.go_version}</p>
					</div>
					<div>
						<p class="text-gray-500">Active Goroutines</p>
						<p class="font-semibold">{systemState.num_goroutine}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Proxies Section -->
		{#if config.proxy}
			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Object.entries(config.proxy) as [key, proxy]}
					<div class="rounded-lg bg-white p-6 shadow-lg">
						<div class="mb-4 flex items-center justify-between">
							<h2 class="text-xl font-semibold text-gray-800">
								{proxy.display_name || key}
							</h2>
							<span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
								{proxy.mode}
							</span>
						</div>
						{#if proxy.description}
							<p class="mb-4 text-sm text-gray-600">{proxy.description}</p>
						{/if}
						<div class="flex justify-between text-sm">
							<div>
								<p class="text-gray-500">From Port</p>
								<div class="flex items-center gap-2">
									<a
										href="http://{window.location.hostname}:{proxy.from}"
										target="_blank"
										rel="noopener noreferrer"
										class="font-mono text-blue-600 hover:text-blue-800">{proxy.from}</a
									>
									<button
										class="rounded p-1 hover:bg-gray-100"
										onclick={() => copyToClipboard(proxy.from.toString())}
										title="Copy port number"
										aria-label="Copy port number"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div class="text-center">
								<p class="text-gray-500">↔</p>
							</div>
							<div>
								<p class="text-gray-500">To Port</p>
								<p class="font-mono">{proxy.to}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- File Shares Section -->
		{#if config.file}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Object.entries(config.file) as [key, file]}
					<div class="rounded-lg bg-white p-6 shadow-lg">
						<h2 class="mb-4 text-xl font-semibold text-gray-800">
							{file.display_name || key}
						</h2>
						<div class="space-y-2">
							<div>
								<p class="text-sm text-gray-500">Port</p>
								<div class="flex items-center gap-2">
									<a
										href="http://{window.location.hostname}:{file.from}"
										target="_blank"
										rel="noopener noreferrer"
										class="font-mono text-blue-600 hover:text-blue-800">{file.from}</a
									>
									<button
										class="rounded p-1 hover:bg-gray-100"
										onclick={() => copyToClipboard(file.from.toString())}
										title="Copy port number"
										aria-label="Copy port number"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div>
								<p class="text-sm text-gray-500">Directory</p>
								<p class="truncate font-mono text-sm">{file.dir}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div
		class="copied-message fixed bottom-4 right-4 hidden rounded bg-gray-800 px-4 py-2 text-white shadow-lg"
	>
		Copied to clipboard!
	</div>
{:catch error}
	<div class="flex min-h-screen items-center justify-center">
		<div class="rounded-lg bg-red-100 p-4 text-red-700">
			Failed to load configuration: {error.message}
		</div>
	</div>
{/await}
