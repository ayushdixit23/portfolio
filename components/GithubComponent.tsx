import GitHubCalendar from 'react-github-calendar';

const GithubStatsSection = () => {

    return (
        <div className="w-full py-16 text-white/70 px-6">
            <div>
                <h2 className="centralise-text text-initial bg-gradient-white-top mb-8">
                    GitHub Stats
                </h2>

                <div className="grid grid-cols-1 mt-12 md:grid-cols-6 lg:grid-cols-10 gap-6 mb-6">
                    <div className={`border border-white/10 rounded-3xl col-span-full p-6`}>
                        <h3 className="text-lg font-medium mb-4 text-white/90">Contribution Calendar</h3>
                        <div className="w-full flex justify-center items-center overflow-x-auto">
                            <GitHubCalendar
                                username="ayushdixit23"
                                blockSize={18}
                                blockMargin={4}
                                fontSize={16}
                                style={{ width: "100%" }}
                                theme={{
                                    light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
                                    dark: ["#1c1c1c", "#0e4429", "#006d32", "#26a641", "#39d353"],
                                }}
                                colorScheme="dark"
                            />
                        </div>

                    </div>

                    <div className={`border border-white/10 rounded-3xl md:col-span-3 lg:col-span-4 flex flex-col`}>
                        <div className="p-6 pb-3">
                            <h3 className="text-lg font-medium mb-2 text-white/90">Activity Stats</h3>
                            <p className="text-sm text-gray-400">Commits, PRs, issues and contributions</p>
                        </div>
                        <div className="mt-auto p-4 flex justify-center">
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=ayushdixit23&show_icons=true&theme=radical&bg_color=00000000&hide_border=true"
                                alt="GitHub Stats"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className={`border border-white/10 rounded-3xl md:col-span-3 lg:col-span-3 flex flex-col`}>
                        <div className="p-6 pb-3">
                            <h3 className="text-lg font-medium mb-2 text-white/90">Top Languages</h3>
                            <p className="text-sm text-gray-400">Most used programming languages</p>
                        </div>
                        <div className="mt-auto p-4 flex justify-center">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayushdixit23&layout=compact&theme=radical&bg_color=00000000&hide_border=true"
                                alt="Top Languages"
                                className="max-w-full h-[200px]"
                            />
                        </div>
                    </div>

                    <div className={`border border-white/10 rounded-3xl md:col-span-6 lg:col-span-3 flex flex-col`}>
                        <div className="p-6 pb-3">
                            <h3 className="text-lg font-medium mb-2 text-white/90">Contribution Streak</h3>
                            <p className="text-sm text-gray-400">Current and longest streak stats</p>
                        </div>
                        <div className="mt-auto p-4 flex justify-center">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=ayushdixit23&theme=radical&background=00000000&hide_border=true"
                                alt="GitHub Streak"
                                className="max-w-full h-[200px]"
                            />
                        </div>
                    </div>

                    <div className={`border border-white/10 rounded-3xl col-span-full flex flex-col`}>
                        <div className="p-6 pb-3">
                            <h3 className="text-lg font-medium mb-2 text-white/90">GitHub Trophies</h3>
                            <p className="text-sm text-gray-400">Special achievements and milestones</p>
                        </div>
                        <div className="mt-auto p-4 flex justify-center overflow-x-auto">
                            <img
                                src="https://github-profile-trophy.vercel.app/?username=ayushdixit23&theme=radical&column=7&no-frame=true&no-bg=true"
                                alt="GitHub Trophies"
                                className="max-w-full h-auto min-w-max"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubStatsSection;