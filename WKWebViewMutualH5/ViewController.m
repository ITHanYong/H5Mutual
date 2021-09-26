//
//  ViewController.m
//  WKWebViewMutualH5
//
//  Created by HanYong on 2021/9/26.
//

#import "ViewController.h"
#import "OC_JS_VC.h"


@interface ViewController ()

@end

@implementation ViewController

#pragma mark - Override
- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.navigationItem.title = @"demo";
    
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeSystem];
    [btn setTitle:@"h5交互" forState:UIControlStateNormal];
    btn.frame = CGRectMake(100, 100, 50, 30);
    [btn addTarget:self action:@selector(openWebView:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
}

-(void)openWebView:(UIButton *)sender{
    OC_JS_VC *vc = [[OC_JS_VC alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

@end
