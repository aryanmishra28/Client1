import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

export function Calculators() {
  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<string>('5000');
  const [sipReturn, setSipReturn] = useState<string>('12');
  const [sipYears, setSipYears] = useState<string>('10');
  const [sipResult, setSipResult] = useState<any>(null);

  // Lumpsum Calculator State
  const [lumpsumAmount, setLumpsumAmount] = useState<string>('100000');
  const [lumpsumReturn, setLumpsumReturn] = useState<string>('12');
  const [lumpsumYears, setLumpsumYears] = useState<string>('10');
  const [lumpsumResult, setLumpsumResult] = useState<any>(null);

  const calculateSIP = () => {
    const P = parseFloat(sipMonthly);
    const r = parseFloat(sipReturn) / 100 / 12;
    const n = parseFloat(sipYears) * 12;

    const M = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const estimatedReturns = M - totalInvestment;

    const chartData = [];
    for (let year = 1; year <= parseFloat(sipYears); year++) {
      const months = year * 12;
      const amount = P * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
      chartData.push({
        year: `Year ${year}`,
        value: Math.round(amount),
      });
    }

    setSipResult({
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(M),
      chartData,
    });
  };

  const calculateLumpsum = () => {
    const P = parseFloat(lumpsumAmount);
    const r = parseFloat(lumpsumReturn) / 100;
    const t = parseFloat(lumpsumYears);

    const A = P * Math.pow(1 + r, t);
    const gains = A - P;

    const chartData = [];
    for (let year = 1; year <= t; year++) {
      const amount = P * Math.pow(1 + r, year);
      chartData.push({
        year: `Year ${year}`,
        value: Math.round(amount),
      });
    }

    setLumpsumResult({
      investedAmount: Math.round(P),
      estimatedGains: Math.round(gains),
      finalValue: Math.round(A),
      chartData,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Investment Calculators
          </h1>
          <p className="text-xl text-gray-600">
            Plan your investments with our easy-to-use calculators
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="sip">SIP Calculator</TabsTrigger>
              <TabsTrigger value="lumpsum">Lumpsum Calculator</TabsTrigger>
            </TabsList>

            {/* SIP Calculator */}
            <TabsContent value="sip">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="sip-monthly">Monthly Investment Amount (₹)</Label>
                    <Input
                      id="sip-monthly"
                      type="number"
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(e.target.value)}
                      className="mt-2"
                      placeholder="5000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sip-return">Expected Annual Return (%)</Label>
                    <Input
                      id="sip-return"
                      type="number"
                      value={sipReturn}
                      onChange={(e) => setSipReturn(e.target.value)}
                      className="mt-2"
                      placeholder="12"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sip-years">Investment Duration (Years)</Label>
                    <Input
                      id="sip-years"
                      type="number"
                      value={sipYears}
                      onChange={(e) => setSipYears(e.target.value)}
                      className="mt-2"
                      placeholder="10"
                    />
                  </div>

                  <Button onClick={calculateSIP} className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    Calculate SIP
                  </Button>
                </div>

                {/* Result Section */}
                <div>
                  {sipResult ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4">
                        <Card className="p-4 bg-blue-50 border-blue-200">
                          <p className="text-sm text-gray-600 mb-1">Total Investment</p>
                          <p className="text-2xl text-[#1e3a8a]">{formatCurrency(sipResult.totalInvestment)}</p>
                        </Card>

                        <Card className="p-4 bg-green-50 border-green-200">
                          <p className="text-sm text-gray-600 mb-1">Estimated Returns</p>
                          <p className="text-2xl text-[#22c55e]">{formatCurrency(sipResult.estimatedReturns)}</p>
                        </Card>

                        <Card className="p-4 bg-purple-50 border-purple-200">
                          <p className="text-sm text-gray-600 mb-1">Total Maturity Value</p>
                          <p className="text-2xl text-purple-700">{formatCurrency(sipResult.totalValue)}</p>
                        </Card>
                      </div>

                      {/* Chart */}
                      <div className="h-64 mt-6">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={sipResult.chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                            <Area type="monotone" dataKey="value" stroke="#1e3a8a" fill="#3b82f6" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>

                      <Link to="/contact">
                        <Button className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90">
                          Talk to Advisor
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <p>Enter values and click Calculate to see results</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Lumpsum Calculator */}
            <TabsContent value="lumpsum">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="lumpsum-amount">Investment Amount (₹)</Label>
                    <Input
                      id="lumpsum-amount"
                      type="number"
                      value={lumpsumAmount}
                      onChange={(e) => setLumpsumAmount(e.target.value)}
                      className="mt-2"
                      placeholder="100000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lumpsum-return">Expected Annual Return (%)</Label>
                    <Input
                      id="lumpsum-return"
                      type="number"
                      value={lumpsumReturn}
                      onChange={(e) => setLumpsumReturn(e.target.value)}
                      className="mt-2"
                      placeholder="12"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lumpsum-years">Time Period (Years)</Label>
                    <Input
                      id="lumpsum-years"
                      type="number"
                      value={lumpsumYears}
                      onChange={(e) => setLumpsumYears(e.target.value)}
                      className="mt-2"
                      placeholder="10"
                    />
                  </div>

                  <Button onClick={calculateLumpsum} className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    Calculate Returns
                  </Button>
                </div>

                {/* Result Section */}
                <div>
                  {lumpsumResult ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4">
                        <Card className="p-4 bg-blue-50 border-blue-200">
                          <p className="text-sm text-gray-600 mb-1">Invested Amount</p>
                          <p className="text-2xl text-[#1e3a8a]">{formatCurrency(lumpsumResult.investedAmount)}</p>
                        </Card>

                        <Card className="p-4 bg-green-50 border-green-200">
                          <p className="text-sm text-gray-600 mb-1">Estimated Gains</p>
                          <p className="text-2xl text-[#22c55e]">{formatCurrency(lumpsumResult.estimatedGains)}</p>
                        </Card>

                        <Card className="p-4 bg-purple-50 border-purple-200">
                          <p className="text-sm text-gray-600 mb-1">Final Value</p>
                          <p className="text-2xl text-purple-700">{formatCurrency(lumpsumResult.finalValue)}</p>
                        </Card>
                      </div>

                      {/* Chart */}
                      <div className="h-64 mt-6">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={lumpsumResult.chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                            <Area type="monotone" dataKey="value" stroke="#1e3a8a" fill="#3b82f6" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>

                      <Link to="/contact">
                        <Button className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90">
                          Talk to Advisor
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <p>Enter values and click Calculate to see results</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> These calculators provide estimates based on the inputs provided. Actual returns may vary based on market conditions. Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
    </div>
  );
}
