import React, { useState, useRef, useEffect } from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('watchlist');
    const [watchlistData, setWatchlistData] = useState({
        indices: [
            { symbol: 'SPX', last: 6643.71, change: 38.98, changePercent: 0.59 },
            { symbol: 'NDQ', last: 24503.85, change: 106.54, changePercent: 0.44 },
            { symbol: 'DJI', last: 46247.29, change: 299.97, changePercent: 0.65 },
            { symbol: 'VIX', last: 15.29, change: -1.45, changePercent: -8.66 },
            { symbol: 'DXY', last: 97.911, change: -0.271, changePercent: -0.28 }
        ],
        stocks: [
            { symbol: 'AAPL', last: 255.46, change: -1.41, changePercent: -0.55, active: true },
            { symbol: 'TSLA', last: 440.40, change: 17.01, changePercent: 4.02 },
            { symbol: 'NFLX', last: 1210.61, change: 2.37, changePercent: 0.20 }
        ]
    });
    const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    const getChangeClass = (change) => {
        return change >= 0 ? 'positive' : 'negative';
    };

    const getSymbolDetails = (symbol) => {
        const details = {
            AAPL: {
                name: 'Apple Inc',
                exchange: 'NASDAQ',
                sector: 'Electronic Technology',
                industry: 'Telecommunications Equipment',
                description: 'Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other varieties of related services.',
                stats: {
                    nextEarnings: 'In 24 days',
                    volume: '46.08 M',
                    avgVolume: '54.34 M',
                    marketCap: '3.79 T'
                }
            },
            TSLA: {
                name: 'Tesla, Inc.',
                exchange: 'NASDAQ',
                sector: 'Consumer Durables',
                industry: 'Motor Vehicles',
                description: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, energy generation and storage systems.',
                stats: {
                    nextEarnings: 'In 18 days',
                    volume: '101.63 M',
                    avgVolume: '85.21 M',
                    marketCap: '1.42 T'
                }
            },
            NFLX: {
                name: 'Netflix, Inc.',
                exchange: 'NASDAQ',
                sector: 'Consumer Services',
                industry: 'Entertainment',
                description: 'Netflix, Inc. provides entertainment services. It offers TV series, documentaries, and feature films across various genres and languages.',
                stats: {
                    nextEarnings: 'In 32 days',
                    volume: '1.94 M',
                    avgVolume: '3.21 M',
                    marketCap: '0.52 T'
                }
            }
        };

        return details[symbol] || details.AAPL;
    };

    if (!isOpen) return null;

    const symbolDetails = getSymbolDetails(selectedSymbol);

    return (
        <div className="sidebar-overlay">
            <div ref={sidebarRef} className="watchlist-sidebar open">
                <div className="widgetbar-pages">
                    <div className="widgetbar-pagescontent">
                        {/* Watchlist Tab */}
                        <div className={`widgetbar-page ${activeTab === 'watchlist' ? 'active' : ''}`}>
                            <div className="widget widgetbar-widget widgetbar-widget-watchlist">
                                {/* Header with Close Button */}
                                <div className="widgetHeader-X9EuSe_t">
                                    <div className="container-mQBvegEO">
                                        <div className="container-u7Ufi_N7">
                                            <div className="leftSlot-u7Ufi_N7 widgetbarWidgetHeaderLeftSlot-mQBvegEO">
                                                <button type="button" className="button-merBkM5y button-g115eYH4 apply-common-tooltip accessible-merBkM5y" data-name="watchlists-button">
                                                    <span className="inner-g115eYH4">
                                                        <div className="headerMenuContent-mQBvegEO">
                                                            <span></span>
                                                            <span className="titleRow-mQBvegEO">Watchlist</span>
                                                        </div>
                                                    </span>
                                                    <div className="arrow-merBkM5y">
                                                        <div className="arrowWrap-merBkM5y">
                                                            <span role="img" className="icon-WB2y0EnP" aria-hidden="true">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8">
                                                                    <path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="rightSlot-u7Ufi_N7 widgetbarWidgetHeaderRightSlot-mQBvegEO">
                                                <div className="buttonWrap-mQBvegEO">
                                                    <button 
                                                        aria-label="Close sidebar" 
                                                        type="button" 
                                                        className="headerButton-mQBvegEO button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S" 
                                                        data-name="close-sidebar-button" 
                                                        data-tooltip="Close"
                                                        onClick={onClose}
                                                    >
                                                        <span role="img" className="icon-GwQQdU8S" aria-hidden="true">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none">
                                                                <path fill="currentColor" d="M8 8l12 12M8 20L20 8"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Watchlist Body */}
                                <div className="widgetbar-widgetbody" style={{ height: '350px' }}>
                                    <div className="watchlist-__KRxuOy">
                                        <div className="list-__KRxuOy">
                                            <div className="wrap-g71rrBCn">
                                                <div className="wrap-Nz1M1_XP">
                                                    {/* Table Header */}
                                                    <div className="tableHeader-Nz1M1_XP">
                                                        <span className="flagWrap-k67yvGbk" data-column-type="flag">
                                                            <button type="button" className="button-D_3frAuZ accessible-D_3frAuZ">
                                                                <span role="img" className="icon-D_3frAuZ flagSortable-k67yvGbk" aria-hidden="true">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="currentColor" focusable="false" preserveAspectRatio="none">
                                                                        <path d="M14 12l-4-6 4-6H0v12z"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </span>
                                                        <span className="columnHeader-k67yvGbk symbolName-Nz1M1_XP">
                                                            <span role="img" className="sortArrow-k67yvGbk desc-k67yvGbk" aria-hidden="true">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                    <path fill="currentColor" d="M8.5 3.84l.34.28 4 3.5-.66.76L9.01 5.6V14H8V5.6L4.84 8.38l-.66-.76 4-3.5.33-.28z"></path>
                                                                </svg>
                                                            </span>
                                                            <button type="button" tabIndex="0" className="label-k67yvGbk sortable-k67yvGbk accessible-k67yvGbk" data-column-type="short_name">Symbol</button>
                                                        </span>
                                                        <div className="placeholder-qp5yBxtk">
                                                            <div className="wrap-qp5yBxtk" style={{ touchAction: 'none' }}>
                                                                <div className="handle-qp5yBxtk"></div>
                                                                <div className="separator-qp5yBxtk"></div>
                                                            </div>
                                                        </div>
                                                        <span className="columnHeader-k67yvGbk last-Nz1M1_XP">
                                                            <span role="img" className="sortArrow-k67yvGbk desc-k67yvGbk" aria-hidden="true">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                    <path fill="currentColor" d="M8.5 3.84l.34.28 4 3.5-.66.76L9.01 5.6V14H8V5.6L4.84 8.38l-.66-.76 4-3.5.33-.28z"></path>
                                                                </svg>
                                                            </span>
                                                            <button type="button" tabIndex="0" className="label-k67yvGbk sortable-k67yvGbk accessible-k67yvGbk" data-column-type="last_price">Last</button>
                                                        </span>
                                                        <div className="placeholder-qp5yBxtk">
                                                            <div className="wrap-qp5yBxtk" style={{ touchAction: 'none' }}>
                                                                <div className="handle-qp5yBxtk"></div>
                                                                <div className="separator-qp5yBxtk"></div>
                                                            </div>
                                                        </div>
                                                        <span className="columnHeader-k67yvGbk change-Nz1M1_XP">
                                                            <span role="img" className="sortArrow-k67yvGbk desc-k67yvGbk" aria-hidden="true">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                    <path fill="currentColor" d="M8.5 3.84l.34.28 4 3.5-.66.76L9.01 5.6V14H8V5.6L4.84 8.38l-.66-.76 4-3.5.33-.28z"></path>
                                                                </svg>
                                                            </span>
                                                            <button type="button" tabIndex="0" className="label-k67yvGbk sortable-k67yvGbk accessible-k67yvGbk" data-column-type="change">Chg</button>
                                                        </span>
                                                        <div className="placeholder-qp5yBxtk">
                                                            <div className="wrap-qp5yBxtk" style={{ touchAction: 'none' }}>
                                                                <div className="handle-qp5yBxtk"></div>
                                                                <div className="separator-qp5yBxtk"></div>
                                                            </div>
                                                        </div>
                                                        <span className="columnHeader-k67yvGbk changeInPercents-Nz1M1_XP lastItem-Nz1M1_XP">
                                                            <span role="img" className="sortArrow-k67yvGbk desc-k67yvGbk" aria-hidden="true">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                    <path fill="currentColor" d="M8.5 3.84l.34.28 4 3.5-.66.76L9.01 5.6V14H8V5.6L4.84 8.38l-.66-.76 4-3.5.33-.28z"></path>
                                                                </svg>
                                                            </span>
                                                            <button type="button" tabIndex="0" className="label-k67yvGbk sortable-k67yvGbk accessible-k67yvGbk" data-column-type="change_percent">Chg%</button>
                                                        </span>
                                                        <div className="placeholder-qp5yBxtk">
                                                            <div className="wrap-qp5yBxtk" style={{ touchAction: 'none' }}>
                                                                <div className="handle-qp5yBxtk"></div>
                                                                <div className="separator-qp5yBxtk"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Symbol List Content */}
                                                <div className="content-g71rrBCn">
                                                    <div className="scrollable-g71rrBCn" data-name="symbol-list-wrap">
                                                        <div className="tree-MgF6KBas" data-name="tree" tabIndex="0">
                                                            <div className="listContainer-MgF6KBas" style={{ position: 'relative', height: '322px', width: '100%', overflow: 'auto' }}>
                                                                {/* Indices Section */}
                                                                <div className="wrap-IEe5qpW4" draggable="true">
                                                                    <div className="separator-eCC6Skn5 firstItem-eCC6Skn5" data-collapsed="false">
                                                                        <div className="innerWrapper-eCC6Skn5 hasExpand-eCC6Skn5">
                                                                            <span role="img" className="expandHandle-eCC6Skn5" aria-hidden="true">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                                    <path fill="currentColor" d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"></path>
                                                                                </svg>
                                                                            </span>
                                                                            <span className="label-eCC6Skn5">Indices</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Indices Symbols */}
                                                                {watchlistData.indices.map((item, index) => (
                                                                    <div key={index} className="wrap-IEe5qpW4" draggable="true">
                                                                        <div className={`symbol-RsFlttSS ${selectedSymbol === item.symbol ? 'active-RsFlttSS' : ''} blackBorder-RsFlttSS`}>
                                                                            <div className="indicators-RsFlttSS blackBorder-RsFlttSS">
                                                                                <span className="container-hEv0no2M">
                                                                                    <div className="uiMarker-erqqoDve flag-RsFlttSS">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="currentColor" focusable="false" preserveAspectRatio="none">
                                                                                            <path d="M14 12l-4-6 4-6H0v12z"></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                            <div className="firstItem-RsFlttSS symbolName-RsFlttSS">
                                                                                <span className="cell-RsFlttSS flexCell-RsFlttSS">
                                                                                    <span className="logo-RsFlttSS container-M1mz4quA">
                                                                                        <img
                                                                                            crossOrigin=""
                                                                                            decoding="async"
                                                                                            src={`https://s3-symbol-logo.tradingview.com/indices/${item.symbol === 'SPX' ? 's-and-p-500' :
                                                                                                item.symbol === 'NDQ' ? 'nasdaq-100' :
                                                                                                    item.symbol === 'DJI' ? 'dow-30' :
                                                                                                        item.symbol === 'VIX' ? 'volatility-s-and-p-500' : 'u-s-dollar-index'}.svg`}
                                                                                            alt={item.symbol}
                                                                                        />
                                                                                    </span>
                                                                                    <div className="displayContents-RsFlttSS">
                                                                                        <div className="flexCell-RsFlttSS">
                                                                                            <span className="inner-RsFlttSS symbolNameText-RsFlttSS">{item.symbol}</span>
                                                                                            <span className="tv-data-mode tv-data-mode--for-symbol-list apply-common-tooltip tv-data-mode--realtime tv-data-mode--realtime--for-symbol-list" title="Real-time">R</span>
                                                                                            <span className="tv-market-status tv-market-status--for-symbol-list tv-market-status--out-of-session tv-market-status--out-of-session--for-symbol-list apply-common-tooltip" title="Market closed">
                                                                                                <span className="tv-market-status__label tv-market-status__label--for-symbol-list">Market closed</span>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                            <span className="cell-RsFlttSS last-RsFlttSS">
                                                                                <span translate="no" className="inner-RsFlttSS">{formatNumber(item.last)}</span>
                                                                            </span>
                                                                            <span className="cell-RsFlttSS change-RsFlttSS">
                                                                                <span translate="no" className={`inner-RsFlttSS ${getChangeClass(item.change)}-RsFlttSS`}>
                                                                                    {item.change > 0 ? '+' : ''}{item.change}
                                                                                </span>
                                                                            </span>
                                                                            <span className="lastItem-RsFlttSS cell-RsFlttSS changeInPercents-RsFlttSS">
                                                                                <span translate="no" className={`inner-RsFlttSS ${getChangeClass(item.change)}-RsFlttSS`}>
                                                                                    {item.change > 0 ? '+' : ''}{item.changePercent}%
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                ))}

                                                                {/* Stocks Section */}
                                                                <div className="wrap-IEe5qpW4" draggable="true">
                                                                    <div className="separator-eCC6Skn5" data-collapsed="false">
                                                                        <div className="innerWrapper-eCC6Skn5 hasExpand-eCC6Skn5">
                                                                            <span role="img" className="expandHandle-eCC6Skn5" aria-hidden="true">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                                    <path fill="currentColor" d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"></path>
                                                                                </svg>
                                                                            </span>
                                                                            <span className="label-eCC6Skn5">Stocks</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Stocks Symbols */}
                                                                {watchlistData.stocks.map((item, index) => (
                                                                    <div key={index} className="wrap-IEe5qpW4" draggable="true">
                                                                        <div 
                                                                            className={`symbol-RsFlttSS ${item.active ? 'active-RsFlttSS' : ''} ${selectedSymbol === item.symbol ? 'active-RsFlttSS' : ''} blackBorder-RsFlttSS`}
                                                                            onClick={() => setSelectedSymbol(item.symbol)}
                                                                        >
                                                                            <div className="indicators-RsFlttSS blackBorder-RsFlttSS">
                                                                                <span className="container-hEv0no2M">
                                                                                    <div className="uiMarker-erqqoDve flag-RsFlttSS">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="currentColor" focusable="false" preserveAspectRatio="none">
                                                                                            <path d="M14 12l-4-6 4-6H0v12z"></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                            <div className="firstItem-RsFlttSS symbolName-RsFlttSS">
                                                                                <span className="cell-RsFlttSS flexCell-RsFlttSS">
                                                                                    <span className="logo-RsFlttSS container-M1mz4quA">
                                                                                        <img
                                                                                            crossOrigin=""
                                                                                            decoding="async"
                                                                                            src={`https://s3-symbol-logo.tradingview.com/${item.symbol.toLowerCase()}.svg`}
                                                                                            alt={item.symbol}
                                                                                        />
                                                                                    </span>
                                                                                    <div className="displayContents-RsFlttSS">
                                                                                        <div className="flexCell-RsFlttSS">
                                                                                            <span className="inner-RsFlttSS symbolNameText-RsFlttSS">{item.symbol}</span>
                                                                                            <span className="tv-data-mode tv-data-mode--for-symbol-list apply-common-tooltip tv-data-mode--realtime tv-data-mode--realtime--for-symbol-list" title="Real-time">R</span>
                                                                                            <span className="tv-market-status tv-market-status--for-symbol-list tv-market-status--out-of-session tv-market-status--out-of-session--for-symbol-list apply-common-tooltip" title="Market closed">
                                                                                                <span className="tv-market-status__label tv-market-status__label--for-symbol-list">Market closed</span>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                            <span className="cell-RsFlttSS last-RsFlttSS">
                                                                                <span translate="no" className="inner-RsFlttSS">{formatNumber(item.last)}</span>
                                                                            </span>
                                                                            <span className="cell-RsFlttSS change-RsFlttSS">
                                                                                <span translate="no" className={`inner-RsFlttSS ${getChangeClass(item.change)}-RsFlttSS`}>
                                                                                    {item.change > 0 ? '+' : ''}{item.change}
                                                                                </span>
                                                                            </span>
                                                                            <span className="lastItem-RsFlttSS cell-RsFlttSS changeInPercents-RsFlttSS">
                                                                                <span translate="no" className={`inner-RsFlttSS ${getChangeClass(item.change)}-RsFlttSS`}>
                                                                                    {item.change > 0 ? '+' : ''}{item.changePercent}%
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Symbol Details Section - Added below Watchlist */}
                            <div className="widget-X9EuSe_t widgetbar-widget widgetbar-widget-detail">
                                <div className="widgetHeader-X9EuSe_t">
                                    <div className="container-ZJX9Rmzv">
                                        <span className="logo-d0vVmGvT container-M1mz4quA">
                                            <span className="logo-M1mz4quA logo-PsAlMQQF xsmall-PsAlMQQF letter-PsAlMQQF">
                                                <img crossOrigin="" decoding="async" src={`https://s3-symbol-logo.tradingview.com/${selectedSymbol.toLowerCase()}.svg`} alt={selectedSymbol} />
                                            </span>
                                        </span>
                                        <span className="title-ZJX9Rmzv" data-qa-id="details-element symbol">{selectedSymbol}</span>
                                        <div className="groupWrap-ZJX9Rmzv hasDisabledSet-ZJX9Rmzv">
                                            <div className="wrap-OfcgU7jK button-merBkM5y apply-common-tooltip" data-role="button" data-name="details-metrics-button">
                                                <span role="img" aria-hidden="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                                        <path fill="currentColor" fillRule="evenodd" d="M7 6h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1ZM5 7c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Zm12-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-2 1c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7Zm-4 9H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-4-1a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H7Zm10 1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm-2 1c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div data-role="button" className="notesBtn-dvJzenj7 button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S" title="Add note" data-name="details-add-note-button">
                                                <span role="img" className="icon-GwQQdU8S" aria-hidden="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                                        <path fill="currentColor" d="M15 6H7.5C6.67 6 6 6.67 6 7.5v13c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V16h1v4.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 20.5v-13A2.5 2.5 0 0 1 7.5 5H15v1Z"></path>
                                                        <path fill="currentColor" d="M22.41 5.7a2 2 0 0 0-2.82 0L11 14.3V18h3.7l8.6-8.59a2 2 0 0 0 0-2.82l-.89-.88Zm-2.12.71a1 1 0 0 1 1.42 0l.88.88a1 1 0 0 1 0 1.42l-.59.58L19.7 7l.6-.59Zm1 3.59-7 7H12v-2.3l7-7 2.3 2.3Z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="wrap-kyudUIs0 button-merBkM5y apply-common-tooltip" title="Settings" data-role="button" data-name="details-settings-button">
                                                <span role="img" aria-hidden="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                                        <path fill="currentColor" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widgetbar-widgetbody" style={{ height: '350px' }}>
                                    <div className="container-Tv7LSjUz">
                                        <div className="wrapper-Tv7LSjUz">
                                            <div className="widgetWrapper-BSF4XTsE">
                                                <span className="main-lu2ARROZ">
                                                    <a className="link-eFCYpbUa" data-qa-id="details-element description" href={`https://www.tradingview.com/symbols/NASDAQ-${selectedSymbol}/`} tabIndex="-1" target="_blank" rel="noopener noreferrer">
                                                        <span className="text-eFCYpbUa">{symbolDetails.name}</span>
                                                        <span role="img" className="icon-eFCYpbUa" aria-hidden="true">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                <path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V10h-1v3.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5H8V3H4.5ZM11 4h2.3L9.14 8.15l.7.7L14 4.71V7h1V3h-4v1Z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                    <div className="dotWrap-lu2ARROZ smallMargin-lu2ARROZ">
                                                        <div className="dot-lu2ARROZ"></div>
                                                    </div>
                                                    <span data-qa-id="details-element exchange">{symbolDetails.exchange}</span>
                                                </span>
                                            </div>
                                            <div className="widgetWrapper-BSF4XTsE">
                                                <span className="additional-lu2ARROZ">
                                                    <a href={`https://www.tradingview.com/markets/stocks-usa/sectorandindustry-sector/${symbolDetails.sector.toLowerCase().replace(/\s+/g, '-')}/`} target="_blank" className="link-lu2ARROZ" data-qa-id="details-element sector">{symbolDetails.sector}</a>
                                                    <div className="dotWrap-lu2ARROZ">
                                                        <div className="dot-lu2ARROZ"></div>
                                                    </div>
                                                    <a href={`https://www.tradingview.com/markets/stocks-usa/sectorandindustry-industry/${symbolDetails.industry.toLowerCase().replace(/\s+/g, '-')}/`} target="_blank" className="link-lu2ARROZ" data-qa-id="details-element industry">{symbolDetails.industry}</a>
                                                </span>
                                            </div>

                                            {/* Price and Change */}
                                            <div className="container-qWcO4bp9 widgetWrapper-BSF4XTsE userSelectText-BSF4XTsE offsetDisabled-BSF4XTsE" data-qa-id="details-element price">
                                                <span className="priceWrapper-qWcO4bp9">
                                                    <span className="highlight-maJ2WnzA highlight-BSF4XTsE price-qWcO4bp9" translate="no" data-qa-id="value">
                                                        {watchlistData.stocks.find(stock => stock.symbol === selectedSymbol)?.last || '255.46'}
                                                    </span>
                                                    <span className="info-qWcO4bp9">
                                                        <span className="tv-data-mode tv-data-mode--for-details apply-common-tooltip tv-data-mode--realtime tv-data-mode--realtime--for-details" title="Real-time">R</span>
                                                        <span className="currency-qWcO4bp9" data-qa-id="currency">USD</span>
                                                    </span>
                                                </span>
                                                <span translate="no" className="wrap-SNvPvlJ3 changeWrap-qWcO4bp9">
                                                    {watchlistData.stocks.filter(stock => stock.symbol === selectedSymbol).map((stock, index) => (
                                                        <React.Fragment key={index}>
                                                            <span className={`change-SNvPvlJ3 highlight-maJ2WnzA highlight-BSF4XTsE ${getChangeClass(stock.change)}-maJ2WnzA ${getChangeClass(stock.change)}-BSF4XTsE`}>
                                                                {stock.change > 0 ? '+' : ''}{stock.change}
                                                            </span>
                                                            <span className={`change-SNvPvlJ3 highlight-maJ2WnzA highlight-BSF4XTsE ${getChangeClass(stock.change)}-maJ2WnzA ${getChangeClass(stock.change)}-BSF4XTsE`}>
                                                                {stock.change > 0 ? '+' : ''}{stock.changePercent}%
                                                            </span>
                                                        </React.Fragment>
                                                    ))}
                                                </span>
                                            </div>

                                            {/* Key Stats */}
                                            <div className="widgetWrapper-BSF4XTsE" data-qa-id="details-element key-stats">
                                                <div className="container-Wrldc8m4 title-Iekpbvhj">
                                                    <span>Key stats</span>
                                                </div>
                                                <div className="items-KSzJG6_A">
                                                    <div className="item-cXDWtdxq">
                                                        <div className="title-cXDWtdxq">
                                                            <span>Next earnings report</span>
                                                        </div>
                                                        <span className="data-cXDWtdxq">{symbolDetails.stats.nextEarnings}</span>
                                                    </div>
                                                    <div className="item-cXDWtdxq">
                                                        <div className="title-cXDWtdxq">
                                                            <span>Volume</span>
                                                        </div>
                                                        <span className="data-cXDWtdxq">{symbolDetails.stats.volume}</span>
                                                    </div>
                                                    <div className="item-cXDWtdxq">
                                                        <div className="title-cXDWtdxq">
                                                            <span>Average Volume (30D)</span>
                                                        </div>
                                                        <span className="data-cXDWtdxq">{symbolDetails.stats.avgVolume}</span>
                                                    </div>
                                                    <div className="item-cXDWtdxq">
                                                        <div className="title-cXDWtdxq">
                                                            <span>Market capitalization</span>
                                                        </div>
                                                        <span className="data-cXDWtdxq">{symbolDetails.stats.marketCap}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Company Description */}
                                            <div className="widgetWrapper-BSF4XTsE" data-qa-id="details-element profile">
                                                <div className="container-Wrldc8m4">Profile</div>
                                                <p data-allow-context-menu="true" className="descriptions-WhmxU2aS collapsed-WhmxU2aS" style={{ '--business-description-row-height': '19px', '--business-description-row-limit': '5' }}>
                                                    {symbolDetails.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Tab */}
                        <div className={`widgetbar-page ${activeTab === 'details' ? 'active' : ''}`}>
                            <div className="details-content">
                                <h3>Symbol Details</h3>
                                <p>Detailed information about selected symbols will appear here.</p>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="widgetbar-tabs">
                        <button
                            className={`widgetbar-tab ${activeTab === 'watchlist' ? 'active' : ''}`}
                            onClick={() => setActiveTab('watchlist')}
                        >
                            Watchlist
                        </button>
                        <button
                            className={`widgetbar-tab ${activeTab === 'details' ? 'active' : ''}`}
                            onClick={() => setActiveTab('details')}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;