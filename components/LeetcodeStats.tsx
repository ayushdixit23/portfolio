"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

type StatsData = {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    acceptanceRate: number;
    ranking: number;
    streak: number;
    monthlyIncrease: number;
};

const LeetCodeStats = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<StatsData | null>(null)


    // Color scheme
    const colors = {
        bgPrimary: "#0A0A0C",
        bgSecondary: "#161618",
        bgTertiary: "#1E1E20",
        accent: "#4AD991",
        accentLight: "#6AFFB1",
        accentDark: "#2AB971",
        textPrimary: "#FFFFFF",
        textSecondary: "#B0B0B0",
        textTertiary: "#fff",
        easy: "#4AD991",
        medium: "#FFC107",
        hard: "#F44336",
        gridLine: "#252527",
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://leetcode-stats-api.herokuapp.com/ayushdixitdev");
                const json = await res.json();

                if (
                    typeof json.totalSolved === "number" &&
                    typeof json.totalQuestions === "number"
                ) {
                    setData(json);
                } else {
                    console.error("Invalid response structure:", json);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="text-white text-center h-screen flex items-center justify-center">
                Loading LeetCode stats...
            </div>
        );
    }

    if (!data) {
        return (
            <div className="text-red-500 text-center h-screen flex items-center justify-center">
                Failed to load stats. Please try again later.
            </div>
        );
    }

    const completionData = {
        labels: ["Completed", "Remaining"],
        datasets: [
            {
                data: [data.totalSolved, data.totalQuestions - data.totalSolved],
                backgroundColor: [`${colors.accent}CC`, `${colors.accent}20`],
                borderColor: [colors.accent, colors.gridLine],
                borderWidth: 0,
                borderRadius: 12,
            },
        ],
    };

    const progressItems = [
        {
            label: "Easy",
            value: data.easySolved,
            total: data.totalEasy,
            color: colors.easy,
            trend: `↑ ${Math.floor(
                (data.easySolved / data.totalEasy) * 100 - 60
            )}% from average`,
        },
        {
            label: "Medium",
            value: data.mediumSolved,
            total: data.totalMedium,
            color: colors.medium,
            trend: `↑ ${Math.floor(
                (data.mediumSolved / data.totalMedium) * 100 - 40
            )}% from average`,
        },
        {
            label: "Hard",
            value: data.hardSolved,
            total: data.totalHard,
            color: colors.hard,
            trend: `↑ ${Math.floor(
                (data.hardSolved / data.totalHard) * 100 - 20
            )}% from average`,
        },
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bgPrimary }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="centralise-text pb-16 text-initial bg-gradient-white-top">
                    LeetCode Stats
                </h1>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delay: 0.6 }}
                >
                    {[
                        {
                            title: "Problems Solved",
                            value: data.totalSolved,
                            change: `${Math.floor(
                                (data.totalSolved / data.totalQuestions) * 100
                            )}%`,
                            icon: (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Acceptance Rate",
                            value: `${data.acceptanceRate}%`,
                            change: "↑ 5.2%",
                            icon: (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Global Rank",
                            value: `#${data.ranking.toLocaleString()}`,
                            change: `Top ${Math.round((data.ranking / 1000000) * 100)}%`,
                            icon: (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Current Streak",
                            value: `50+ days`,
                            change: "🔥 Hot streak!",
                            icon: (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -5,
                                boxShadow: `0 10px 25px -5px ${colors.accent}20`,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="rounded-2xl p-6 relative overflow-hidden border border-white/5"
                            // style={{ backgroundColor: colors.bgSecondary }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div> */}

                            <div className="relative z-10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p
                                            className="text-sm font-medium mb-1"
                                            style={{ color: colors.textSecondary }}
                                        >
                                            {stat.title}
                                        </p>
                                        <p className="text-3xl font-bold">{stat.value}</p>
                                    </div>
                                    <motion.div
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: `${colors.accent}10` }}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                </div>
                                <motion.p
                                    className="mt-3 text-xs inline-block px-2 py-1 rounded-full"
                                    style={{
                                        backgroundColor: `${colors.accent}10`,
                                        color: colors.accent,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {stat.change}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}

                        className="rounded-2xl overflow-hidden relative border border-white/5"
                        // style={{ backgroundColor: colors.bgSecondary }}
                        whileHover={{
                            y: -5,
                            boxShadow: `0 10px 25px -5px ${colors.accent}20`,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div> */}

                        <div className="p-6 relative z-10 text-white">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center">
                                    <span
                                        className="w-3 h-3 rounded-full mr-3"
                                        style={{ backgroundColor: colors.accent }}
                                    ></span>
                                    Completion Progress
                                </h2>
                                <div
                                    className="text-xs px-3 py-1 rounded-full"
                                    style={{
                                        backgroundColor: `${colors.accent}10`,
                                        color: colors.accent,
                                    }}
                                >
                                    OVERALL
                                </div>
                            </div>

                            <div className="h-64 flex items-center justify-center relative">
                                <Pie
                                    data={completionData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        cutout: "70%",
                                        plugins: {
                                            legend: {
                                                position: "bottom",
                                                labels: {
                                                    color: colors.textSecondary,
                                                    usePointStyle: true,
                                                    padding: 20,
                                                    font: {
                                                        family: "Inter, sans-serif",
                                                    },
                                                },
                                            },
                                            tooltip: {
                                                backgroundColor: colors.bgTertiary,
                                                titleColor: colors.textPrimary,
                                                bodyColor: colors.textSecondary,
                                                borderColor: colors.gridLine,
                                                borderWidth: 1,
                                                padding: 12,
                                                cornerRadius: 8,
                                            },
                                        },
                                        animation: {
                                            animateScale: true,
                                            animateRotate: true,
                                        },
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center flex-col"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <div
                                        className="text-4xl font-bold"
                                        style={{ color: colors.accent }}
                                    >
                                        {Math.round((data.totalSolved / data.totalQuestions) * 100)}
                                        %
                                    </div>
                                    <div
                                        className="text-sm mt-2"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        Completion
                                    </div>
                                </motion.div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <motion.div
                                    className="text-center p-4 rounded-lg"
                                    style={{ backgroundColor: colors.bgTertiary }}
                                    whileHover={{
                                        y: -4,
                                        backgroundColor: `${colors.accent}10`,
                                        boxShadow: `0 4px 12px ${colors.accent}20`,
                                    }}
                                >
                                    <div className="text-2xl font-bold">{data.totalSolved}</div>
                                    <div
                                        className="text-xs"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        Solved
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="text-center p-4 rounded-lg"
                                    style={{ backgroundColor: colors.bgTertiary }}
                                    whileHover={{
                                        y: -4,
                                        backgroundColor: `${colors.accent}10`,
                                        boxShadow: `0 4px 12px ${colors.accent}20`,
                                    }}
                                >
                                    <div className="text-2xl font-bold">
                                        {data.totalQuestions - data.totalSolved}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        Remaining
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}

                        className="rounded-2xl overflow-hidden relative border border-white/5"
                        // style={{ backgroundColor: colors.bgSecondary }}
                        whileHover={{
                            y: -5,
                            boxShadow: `0 10px 25px -5px ${colors.accent}20`,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div> */}

                        <div className="p-6 relative z-10">
                            <div className="flex items-center justify-between mb-6 text-white">
                                <h2 className="text-xl font-bold flex items-center">
                                    <span
                                        className="w-3 h-3 rounded-full mr-3"
                                        style={{ backgroundColor: colors.accent }}
                                    ></span>
                                    Progress Breakdown
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {progressItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative"

                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span
                                                className="text-sm"
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {item.label}
                                            </span>
                                            <span
                                                className="text-xs font-medium"
                                                style={{ color: item.color }}
                                            >
                                                {Math.round((item.value / item.total) * 100)}%
                                            </span>
                                        </div>
                                        <div
                                            className="relative h-2.5 rounded-full overflow-hidden"
                                            style={{ backgroundColor: colors.gridLine }}
                                        >
                                            <motion.div
                                                className="absolute top-0 left-0 h-full rounded-full"
                                                style={{ backgroundColor: item.color }}
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${(item.value / item.total) * 100}%`,
                                                }}
                                                transition={{
                                                    delay: 1.2 + index * 0.1,
                                                    duration: 1.5,
                                                    type: "spring",
                                                }}
                                            />

                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <span
                                                className="text-xs"
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {item.value}/{item.total}
                                            </span>
                                            <motion.span
                                                className="text-xs"
                                                style={{ color: item.color }}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.4 + index * 0.1 }}
                                            >
                                                {item.trend}
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                ))}

                                <div
                                    className="pt-4 mt-6 border-t"
                                    style={{ borderColor: colors.gridLine }}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <span
                                            className="text-sm"
                                            style={{ color: colors.textSecondary }}
                                        >
                                            Total Progress
                                        </span>
                                        <span
                                            className="text-sm font-bold"
                                            style={{ color: colors.accent }}
                                        >
                                            {Math.round(
                                                (data.totalSolved / data.totalQuestions) * 100
                                            )}
                                            %
                                        </span>
                                    </div>
                                    <div
                                        className="relative h-2.5 rounded-full overflow-hidden"
                                        style={{ backgroundColor: colors.gridLine }}
                                    >
                                        <motion.div
                                            className="absolute top-0 left-0 h-full rounded-full"
                                            style={{ backgroundColor: colors.accent }}
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: `${(data.totalSolved / data.totalQuestions) * 100
                                                    }%`,
                                            }}
                                            transition={{ delay: 1.5, duration: 1.5, type: "spring" }}
                                        />

                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span
                                            className="text-xs"
                                            style={{ color: colors.textSecondary }}
                                        >
                                            {data.totalSolved}/{data.totalQuestions}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default LeetCodeStats;